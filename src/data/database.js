const data = [
    {
      id: 1,
      nome: "Landing on Love",
      nota: 5,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/pousando-no-amor.jpg",
      descricao: "Uma oficial norte-coreana e um herdeiro sul-coreano se apaixonam após um acidente de parapente. Um romance proibido entre fronteiras, cheio de emoção e tensão política."
    },
    {
      id: 2,
      nome: "Alchemy of Souls",
      nota: 4.8,
      imagem: "https://br.web.img3.acsta.net/c_310_420/pictures/22/06/14/04/39/4262976.png",
      descricao: "Em um mundo mágico, uma guerreira poderosa tem sua alma trocada com uma jovem frágil. Juntos, enfrentam perigos e descobrem segredos sobre seus passados."
    },
    {
      id: 3,
      nome: "Surpise Suitor",
      nota: 4.6,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/pretendente-surpresa.jpg",
      descricao: "Uma jovem se vê envolvida em um triângulo amoroso inesperado quando um misterioso pretendente aparece em sua vida, mudando tudo com charme e segredos."
    },
    {
      id: 4,
      nome: "Royal Smile",
      nota: 4.0,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/sorriso-real.jpg",
      descricao: "Uma terapeuta emocional é contratada para ajudar um príncipe herdeiro. Entre sessões e sorrisos, nasce um vínculo que desafia tradições e protocolos reais."
    },
    {
      id: 5,
      nome: "True Beauty",
      nota: 3.5,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/beleza-verdadeira.jpg",
      descricao: "Uma adolescente insegura domina a maquiagem para esconder sua aparência. Mas o amor verdadeiro surge quando alguém vê além da superfície."
    },
    {
      id: 6,
      nome: "It's Okay Not to Be Normal",
      nota: 4.1,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/tudo-bem-nao-ser-normal.jpg",
      descricao: "Um cuidador de pacientes psiquiátricos e uma escritora excêntrica enfrentam traumas do passado juntos, descobrindo que a cura pode vir do afeto."
    },
    {
      id: 7,
      nome: "In the Direction of Love",
      nota: 3.2,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/na-direcao-do-amor.jpeg",
      descricao: "Dois estranhos se cruzam repetidamente em momentos decisivos. O destino parece guiá-los na direção do amor, mesmo quando tudo conspira contra."
    },
    {
      id: 8,
      nome: "What's Wrong with Secretary Kim",
      nota: 4.2,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/oq-houve-com-a-srt-kim.jpeg",
      descricao: "Um CEO narcisista entra em crise quando sua eficiente secretária decide se demitir. Ele tenta reconquistá-la, descobrindo sentimentos que nunca reconheceu."
    },
    {
      id: 9,
      nome: "Love Lives Next Door",
      nota: 4.0,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/o-amor-mora-ao-lado.jpg",
      descricao: "Vizinhos com personalidades opostas se envolvem em situações hilárias e emocionantes. Aos poucos, descobrem que o amor pode estar mais perto do que imaginam."
    },
    {
      id: 10,
      nome: "Demon Hunters",
      nota: 4.7,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/cacadores-de-demonios.jpg",
      descricao: "Um grupo de jovens com poderes especiais combate demônios que ameaçam o mundo. A ação intensa se mistura com dramas pessoais e mistérios sobrenaturais."
    },
    {
      id: 11,
      nome: "All of Us Are Dead",
      nota: 4.6,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/all-of-us-are-dead.jpg",
      descricao: "Estudantes ficam presos em uma escola durante um surto zumbi. Lutando pela sobrevivência, enfrentam dilemas morais e descobrem sua força interior."
    },
    {
      id: 12,
      nome: "Sweet Home",
      nota: 4.2,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/Sweet-Home.jpg",
      descricao: "Moradores de um prédio enfrentam monstros que refletem seus desejos mais sombrios. Um jovem solitário lidera a luta pela sobrevivência e redenção."
    },
    {
      id: 13,
      nome: "My Favorite Demon",
      nota: 4.4,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/my-demon.jpg",
      descricao: "Uma jovem se apaixona por um demônio que perdeu seus poderes. Juntos, enfrentam ameaças sobrenaturais e descobrem que o amor pode ser redentor."
    },
    {
      id: 14,
      nome: "Misfortune at Your Disposal",
      nota: 4.6,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/desgraca-ao-seu-dispor.jpg",
      descricao: "Uma mulher com o poder de atrair desgraças é contratada por um homem misterioso. Entre tragédias e comédia, nasce uma conexão improvável."
    },
    {
      id: 15,
      nome: "Tomorrow",
      nota: 4.7,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/AmanhA.jpg",
      descricao: "Ceifadores ajudam pessoas em crise a encontrar esperança. Uma abordagem sensível e tocante sobre saúde mental, redenção e o valor da vida."
    },
    {
      id: 16,
      nome: "My name",
      nota: 5.0,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/My-Name.jpg",
      descricao: "Após perder o pai, uma jovem se infiltra na polícia para vingar sua morte. A ação intensa revela segredos e dilemas morais profundos."
    },
    {
      id: 17,
      nome: "Round 6",
      nota: 4.4,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/round-6.jpg",
      descricao: "Pessoas endividadas participam de jogos mortais por um prêmio milionário. Uma crítica social envolvente, cheia de tensão, reviravoltas e reflexões sobre humanidade."
    },
    {
      id: 18,
      nome: "The Lesson",
      nota: 4.8,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/A-Li%C3%A7%C3%A3o.jpg",
      descricao: "Uma professora busca vingança contra alunos que a humilharam. Um drama intenso sobre bullying, justiça e os limites da dor emocional."
    },
    {
      id: 19,
      nome: "Doona",
      nota: 2.8,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/doona.jpg",
      descricao: "Um estudante universitário se envolve com uma ex-idol reclusa. Entre fama, solidão e romance, eles tentam entender seus sentimentos e traumas."
    },
    {
      id: 20,
      nome: "Big Mouth",
      nota: 5.0,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/big-mouse.jpg",
      descricao: "Um advogado medíocre é confundido com um gênio do crime. Preso em uma teia de corrupção, ele luta para provar sua inocência."
    },
    {
      id: 21,
      nome: "2521",
      nota: 4.7,
      imagem: "https://upload.wikimedia.org/wikipedia/pt/1/15/Twenty-Five_Twenty-One.jpg",
      descricao: "Durante uma crise econômica, uma jovem esgrimista e um jornalista em ascensão vivem um romance nostálgico, marcado por sonhos e amadurecimento."
    },
    {
      id: 22,
      nome: "My Husband's Wife",
      nota: 4.6,
      imagem: "https://titulos-vercel.vercel.app/IMG/IMG-Doramas/a-esposa-do-meu-marido.jpg",
      descricao: "Uma mulher descobre que seu marido tem outra esposa. Em meio ao choque, ela busca respostas"
    }
]



export default data;