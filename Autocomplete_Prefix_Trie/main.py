class Node:
    def __init__(self):
        self.characters = ''
        self.children = [0]*256

    def add(self, ch):
        self.characters += ch


def insert_text(root, text):

    if root == None:
        print("Error: Root is None")

    tmp_root = root
    for ch in text:
        # print(f"ch : {ch} and at node : {root.children[ord(ch)]}")
        root.children[ord(ch)] = Node()
        # print(f"NEW NODE CREATED AT: {root.children[ord(ch)]} ")
        root.add(ch)
        root = root.children[ord(ch)]

    return tmp_root


def print_tree(root: Node):
    if root == None:
        print("Error: Root is None")

    for c in root.characters:
        print(f"character : {c} of root : {root.characters} ")
        print_tree(root.children[ord(c)])


# n = int(input())
# for _ in range(n):
#     text = input()
#     root = insert_text(root, text)

# text = input()
text = 'hello'

root = Node()
root = insert_text(root, text)
print_tree(root)