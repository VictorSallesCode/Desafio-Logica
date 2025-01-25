#include <stdio.h>
#include <stdlib.h>

int main(){
    
    float notafinal;
    printf("Digite sua nota final: ");
    scanf("%f", &notafinal);
    if (notafinal < 0|| notafinal> 10)
    {
        printf("Digite uma nota valida(0 a 10): \n");
    }
    else{
        if(notafinal <= 3){
            printf("Você foi reprovado!");
        }
        else {
            if(notafinal <6){
                printf("Você esta de recuperaçao!");
            }
            else{
                printf("Você esta aprovado!");
            }

        }

    }

    system("pause");
    return 0;

}