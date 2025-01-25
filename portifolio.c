#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

int main()
{
    setlocale(LC_ALL,"pt_BR");
    
    char tipo[20];
    float kg, custokg, quant, customes, kgmes, diaria;

    printf("Tipo de animal: ");
    scanf( "%20s", &tipo);
    printf("\nQuantidade de deste animal no zoológico: ");
    scanf("%f",&quant);
    printf("\nCusto estimado por kilo de comida: ");
    scanf("%f",&custokg);
    printf("\nQuantidade de comida em kilo que este animal consuma por dia: ");
    scanf("%f",&kg);    
    diaria = quant * (custokg * kg);
    kgmes = (quant * kg) * 30;
    customes = kgmes * custokg;

    printf("\nCusto estimado por dia: R$ %.2f", diaria);
    printf("\nQuantidade de comida consumida por mês: %.2f kg" ,kgmes);
    printf("\nCusto estimado por mes: R$ %.2f .\n\n" ,customes);
   

    system("pause");
    return 0;
}