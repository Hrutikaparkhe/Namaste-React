import java.util.*;
public class FindSumPair {
    public static int[] findSumPair(int[] A,int n){
        // Arrays.sort(A)
        int result[]=new int[10];
       for(int i = 0; i<A.length-1; i++){
for(int j=i+1;j<A.length;j++){
if(A[i]+A[j]== n){
   result[i]=A[i];
result[j]=A[j];
}
else{
System.out.println("no pair found");
}
}
       } 
      return result; 
        
    }
    public static void main(String[] args) {
        Scanner sc= new Scanner(System.in);
// int pair[]= new int[10];
int [ ] num = {1, 2, 3,4};
findSumPair(num, 6);
    }
}
