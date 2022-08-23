# The number of goals achieved by two football teams in matches in a league is given in the form of two lists. For each match of team B, compute the total number of matches of team A where team A has scored less than or equal to
# the number of goals scored by team B in that match

# determine the number of matches of team A where team A has scored less than or equal to the number of goals scored by team B in that match

# team_a = [1, 2, 3]
# team_b = [2, 4]
# expected output = [2,3]

from itertools import count


# def counts(team_a, team_b):
#     count = 0
#     greaterThanArray = []
#     for i in range(len(team_b)):
#         for j in range(len(team_a)):
#             if team_b[i] >= team_a[j]:
#                 count += 1
#         greaterThanArray.append(count)
#         count = 0
#     return greaterThanArray

def counts(team_a, team_b):
    greaterThanArray = []
    while team_b:
        count = 0
        for i in range(len(team_a)):
            if team_b[0] >= team_a[i]:
                count += 1
        greaterThanArray.append(count)
        team_b.pop(0)
    return greaterThanArray


print(counts([1, 2, 3], [2, 4]))
