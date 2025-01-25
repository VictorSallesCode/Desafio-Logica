#include <stdio.h>
#include <stdlib.h>
#include <locale.h>


int main()
{
    setlocale(LC_ALL,"pt_BR");
   
    char tipo[20];
    float kg, custokg, quant, customes, kgmes, diaria;


    printf("Calculadora de custo - Zoologico \n");
    printf("Digite o tipo de animal: ");
    scanf( "%20s", &tipo);
    printf("\nDigite quantos animais: ");
    scanf("%f",&quant);
    printf("\nDigite quanto custa o kilo da comida: ");
    scanf("%f",&custokg);    
    printf("\nDigite quantos kilos esse animal consome de alimento por dia: ");
    scanf("%f",&kg);
    diaria = quant * (custokg * kg);
    kgmes = (quant * kg) * 30;
    customes = kgmes * custokg;


    printf("\nPara manter essa quantidade de %s por dia voce precisa gastar R$ %.2f" ,tipo, diaria);
    printf("\nQuantidade de comida consumida por mes %.2f kg " ,kgmes);
    printf("\nCusto estimado por mes R$ %.2f \n\n" ,customes);
   


    system("pause");
    return 0;
}
