let herois = [["DragonLORD", 2500]]; 
let rank;

if (herois[0][1] <= 1000) {
    rank = "Ferro";
    console.log("Status do herói\n Nome: " + herois[0][0] + " sua experiência acumulada é " + herois[0][1] + " logo seu Rank é:\n " + rank);
} 
else if (herois[0][1] > 1001 && herois[0][1] <= 2000) { 
    rank = "Bronze";
    console.log("Status do herói\n Nome: " + herois[0][0] + " sua experiência acumulada é " + herois[0][1] + " logo seu Rank é:\n " + rank);
} 
else if (herois[0][1] > 2001 && herois[0][1] <= 5000) { 
    rank = "Prata";
    console.log("Status do herói\n Nome: " + herois[0][0] + " sua experiência acumulada é " + herois[0][1] + " logo seu Rank é:\n " + rank);
} 
else if (herois[0][1] > 5001 && herois[0][1] <= 7000) { 
    rank = "Ouro";
    console.log("Status do herói\n Nome: " + herois[0][0] + " sua experiência acumulada é " + herois[0][1] + " logo seu Rank é:\n " + rank);
}
else if (herois[0][1] > 7001 && herois[0][1] <= 8000) { 
    rank = "Platina";
    console.log("Status do herói\n Nome: " + herois[0][0] + " sua experiência acumulada é " + herois[0][1] + " logo seu Rank é:\n " + rank);
}
else if (herois[0][1] > 8001 && herois[0][1] <= 9000) { 
    rank = "Ascendente";
    console.log("Status do herói\n Nome: " + herois[0][0] + " sua experiência acumulada é " + herois[0][1] + " logo seu Rank é:\n " + rank);
}
else if (herois[0][1] > 9001 && herois[0][1] <= 10000) { 
    rank = "Imortal";
    console.log("Status do herói\n Nome: " + herois[0][0] + " sua experiência acumulada é " + herois[0][1] + " logo seu Rank é:\n " + rank);
}
else if (herois[0][1] >= 10001) { 
    rank = "Radiante";
    console.log("Status do herói\n Nome: " + herois[0][0] + " sua experiência acumulada é " + herois[0][1] + " logo seu Rank é:\n " + rank);
}
