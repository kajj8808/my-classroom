import localFont from "next/font/local"

const pretendard = localFont({
    src: [
        {
            path: "./Pretendard-Regular.woff",
            weight: "400",
            style: "normal"
        },
        {
            path: "Pretendard-Bold.woff",
            weight: "600",
            style: "normal"
        }
    ]
})

export default pretendard;