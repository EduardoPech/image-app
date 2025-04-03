;import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import optipng from 'imagemin-optipng';
import webp from 'imagemin-webp';
import svgo from 'imagemin-svgo';
import gifsicle from 'imagemin-gifsicle';
import rename from 'gulp-rename';

// Lighthouse-optimized task
gulp.task('optimize-images', () => {
    return gulp.src('src/images/**/*')  // Include subdirectories
        .pipe(imagemin([
            // JPEG optimization - Lighthouse expects ~85% quality
            mozjpeg({ 
                quality: 85,
                progressive: true 
            }),
            // PNG optimization
            optipng({ 
                optimizationLevel: 3  // Balance between quality and compression
            }),
            // WebP conversion (creates additional WebP versions)
            webp({ 
                quality: 85
            }),
            // SVG optimization
            svgo(),
            // GIF optimization
            gifsicle({
                optimizationLevel: 2,
                interlaced: true
            })
        ]))
        .pipe(gulp.dest('src/optimized'));
});

// Create WebP versions separately
gulp.task('create-webp', () => {
    return gulp.src('src/images/**/*.{jpg,jpeg,png}')
        .pipe(imagemin([
            webp({ quality: 85 })
        ]))
        .pipe(rename(function(path) {  // Changed from gulp.rename to rename
            path.extname = ".webp";
        }))
        .pipe(gulp.dest('src/optimized'));
});

gulp.task('watch', () => {
    gulp.watch('src/images/**/*', gulp.series('optimize-images', 'create-webp'));
});

gulp.task('default', gulp.series('optimize-images', 'create-webp', 'watch'));