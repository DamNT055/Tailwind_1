/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.{html,js}",
        "./src/**/*.{html,js}",
        "node_modules/preline/dist/*.js",
    ],
    theme: {
        extend: {
            aspectRatio: {
                "4/3": "4/3",
            },
            container: {
                center: true,
            },
            columns: {
                "4xs": "14rem",
            },
        },
        fontFamily: {
            awesome: ["fontAwesome"],
        },
    },
    plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
