cnt = 0
class Node:
    def __init__(self):
        self.id = self.get_id()
        self.characters = ''
        self.children = [0]*256

    def add(self, ch):
        self.characters += ch

    def get_id(self):
        global cnt
        cnt += 1
        return cnt


def insert_text(root: Node , text):

    tmp_root = root
    for ch in text:

        if root.children[ord(ch)] == 0:
            root.children[ord(ch)] = Node()
            root.add(ch)

        root = root.children[ord(ch)]

    return tmp_root


def render(root: Node):
    for c in root.characters:
        child = root.children[ord(c)]
        print(f"    Node{root.id} -> Node{child.id} [label=\"{c}\"];")
        render(child) 


def echo_to_dot(root):
    print("digraph G{")
    render(root)
    print("}")


def insert_from_file(root,filename):
    with open(filename,'r') as file:
        lines = file.readlines()

        for line in lines:
            text = line.strip()  
            root = insert_text(root, text)

    return root


root = Node()
root = insert_from_file(root,'./inp.txt')
echo_to_dot(root)