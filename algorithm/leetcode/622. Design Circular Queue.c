typedef struct MyCircularQueue{
    int* data;
    int size;
    int flag;
    int front;
    int rear;
} MyCircularQueue;

/** Initialize your data structure here. Set the size of the queue to be k. */

MyCircularQueue* myCircularQueueCreate(int k) {
    MyCircularQueue* obj=(MyCircularQueue*)malloc(sizeof(MyCircularQueue));
    obj->data=(int*)malloc(k*sizeof(int));
    obj->size=k;
    obj->flag=0;
    obj->front=0;
    obj->rear=0;
    return obj;
}

/** Checks whether the circular queue is empty or not. */
bool myCircularQueueIsEmpty(MyCircularQueue* obj) {
  return obj->flag==0&&obj->front==obj->rear;
}

/** Checks whether the circular queue is full or not. */
bool myCircularQueueIsFull(MyCircularQueue* obj) {
  return obj->flag==1;
}

/** Insert an element into the circular queue. Return true if the operation is successful. */
bool myCircularQueueEnQueue(MyCircularQueue* obj, int value) {
  if(myCircularQueueIsFull(obj)) return false;
  obj->data[obj->rear]=value;
  obj->rear=(obj->rear+1)%obj->size;
  obj->flag=obj->front==obj->rear?1:0;
  return true;
}

/** Delete an element from the circular queue. Return true if the operation is successful. */
bool myCircularQueueDeQueue(MyCircularQueue* obj) {
  if(myCircularQueueIsEmpty(obj)) return false;
  obj->data[obj->front]=0;
  obj->front=(obj->front+1)%obj->size;
  obj->flag=0;
  return true;
}

/** Get the front item from the queue. */
int myCircularQueueFront(MyCircularQueue* obj) {
  if(myCircularQueueIsEmpty(obj)) return -1;
  return obj->data[obj->front];
}

/** Get the last item from the queue. */
int myCircularQueueRear(MyCircularQueue* obj) {
  if(myCircularQueueIsEmpty(obj)) return -1;
  return obj->data[(obj->size+obj->rear-1)%obj->size];  
}


void myCircularQueueFree(MyCircularQueue* obj) {
    free(obj->data);
    free(obj);
}

/**
 * Your MyCircularQueue struct will be instantiated and called as such:
 * MyCircularQueue* obj = myCircularQueueCreate(k);
 * bool param_1 = myCircularQueueEnQueue(obj, value);
 
 * bool param_2 = myCircularQueueDeQueue(obj);
 
 * int param_3 = myCircularQueueFront(obj);
 
 * int param_4 = myCircularQueueRear(obj);
 
 * bool param_5 = myCircularQueueIsEmpty(obj);
 
 * bool param_6 = myCircularQueueIsFull(obj);
 
 * myCircularQueueFree(obj);
*/