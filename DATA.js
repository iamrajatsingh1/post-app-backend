const ALL_POSTS = [
    {
        id: 1,
        username: 'john_doe',
        profileImage: "https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cNWjGI3w4d4m~4~QtdbzV6jW260~jhet4T9u8BPWW2uzytazTokJFlVDT3y1tthPwIZFnII3-GbBaX2byJma~fZpMf85lf93yuMcQmDc5IOIKUBrCgVk7rGFQKgyyCVAN89n-VYTIDjy86305y6eLV4pXcp~4uWbFQwgz0q6Wm8-rzj6zDpPAhdHURpSWypwQSiLv~GAytSSyJjKA1FzwhhR7vIrQRRPwoJChOKS1YZQvuNXDgUxLcJTUzbJ357lK~1ll7GaMAWvHjCfcYs9pHuiCHj6z9y7AEhH2AWDBoL2R0TVJDikrCgg3iRjJDEce8ZGCedFyeegBGtZtg4JGw__",
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        createdAt: new Date('2024-01-07T02:00:00Z'),
        replies: [
            {
                username: 'alice',
                content: 'Great post!',
                createdAt: new Date('2024-01-07T12:15:00Z'),
            },
        ],
    },
    {
        id: 2,
        anonymous: true,
        profileImage: "https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PHlXaJHiROQSyYNQbpXFoZrN2~8-u5nsaZT1jqSc2OEcugqxjqavgS6tJ2e8StK2Bu~eV6L5H06jN5o8EnwBgsMxZZZ5RzHUkiwDdwBBOgn9ArnJ1mNhqb-WxxRyzTw69YPzVGBJ2DwQEh7uZq5MovAhsI4xIYOmdzHTVaSv6OxMBgy4pS9s8OV3XFPkbCAl4~G9hwAMNdchrKJZivDbZGoMxDQB2yh~JJtYFc1yPJ6P~bPlpWF8V1FaXPoG8foecpGyoIMs5ifhchKnqtu-OdZl0XBM~XoqKa96-2NHB7mZ05UDxbbIAZhJpTeGmBjFSDfijrkvM95xJEFN-cHkRg__",
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        createdAt: new Date('2024-01-05T12:00:00Z'),
        replies: [
            {
                username: 'alice',
                content: 'Great post!',
                createdAt: new Date('2024-01-05T12:15:00Z'),
            },
        ],
    },
    {
        id: 3,
        anonymous: true,
        profileImage: "https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PHlXaJHiROQSyYNQbpXFoZrN2~8-u5nsaZT1jqSc2OEcugqxjqavgS6tJ2e8StK2Bu~eV6L5H06jN5o8EnwBgsMxZZZ5RzHUkiwDdwBBOgn9ArnJ1mNhqb-WxxRyzTw69YPzVGBJ2DwQEh7uZq5MovAhsI4xIYOmdzHTVaSv6OxMBgy4pS9s8OV3XFPkbCAl4~G9hwAMNdchrKJZivDbZGoMxDQB2yh~JJtYFc1yPJ6P~bPlpWF8V1FaXPoG8foecpGyoIMs5ifhchKnqtu-OdZl0XBM~XoqKa96-2NHB7mZ05UDxbbIAZhJpTeGmBjFSDfijrkvM95xJEFN-cHkRg__",
        content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        createdAt: new Date('2024-01-01T12:00:00Z'),
        replies: [
            {
                username: 'alice',
                content: 'Great post!',
                createdAt: new Date('2024-01-01T12:15:00Z'),
            },
        ],
    },
];
module.exports = {
    ALL_POSTS: ALL_POSTS
}