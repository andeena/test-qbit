comments= [
    {
        "commentId": 1,
        "commentContent": 'Hai',
        "replies": [
        {
            "commentId": 11,
            "commentContent": 'Hai juga',
            "replies": [
                {
                    "commentId": 111,
                    "commentContent": 'Haai juga hai jugaa'
                },
                {
                    "commentId": 112,
                    "commentContent": 'Haai juga hai jugaa'
                }
            ]
        },
        {
            "commentId": 12,
            "commentContent": 'Hai juga',
            "replies": [
                {
                "commentId": 121,
                "commentContent": 'Haai juga hai jugaa'
                }
            ]
        }
        ]
    },
    {
        "commentId": 2,
        "commentContent": 'Halooo'
    }
]

def count_comments(comment_list):
    total = 0
    for comment in comment_list:
        total += 1
        if "replies" in comment:
            total += count_comments(comment["replies"])
    return total

print("Total komentar:", count_comments(comments))