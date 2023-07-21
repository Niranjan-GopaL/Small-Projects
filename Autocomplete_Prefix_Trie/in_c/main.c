#include <stdio.h>
#include <assert.h>

// root->Node['h']->Node['e']->Node['l']->Node['l']->Node['o']
typedef struct{
    Node *children[256];
}Node;


#define NODE_POOL_CAP 1028
Node *node_pool[NODE_POOL_CAP];
size_t node_pool_count = 0;


Node *alloc_node(void){
    assert(node_pool_count < NODE_POOL_CAP);

    // single line mem allocator
    return &node_pool[node_pool_count++];
}


void insert_text(Node *root, const char *text){

    if(*text == '\0')return;

    size_t idx = (size_t) *text;

    assert(root != NULL);
    if(root->children[idx] == NULL)
        root->children[idx] = alloc_node();

    insert_text(root->children[idx], text+1);

}




int main(){

    Node* root = alloc_node();
    insert_text(root, "hello");


    return 0;
}