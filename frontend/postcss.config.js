export default {
    plugins: {
        'postcss-preset-env': {
            stage: 1,
            features: {
                'custom-properties': true,
                'nesting-rules': true,
            },
        },
    },
}