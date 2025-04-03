module.exports = {
    plugins: [
        require('imagemin-mozjpeg')({
            quality: 75
        }),
        require('imagemin-pngquant')({
            quality: [0.6, 0.8]
        }),
        require('imagemin-webp')({
            quality: 75
        }),
        require('imagemin-svgo')({
            plugins: [
                { removeViewBox: false }
            ]
        })
    ]
};