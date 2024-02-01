
				var max = 255
				var min = 0

				function mudarFundo(a, b, c) {

					var a = Math.floor(Math.random() * (max - min + 1)) + min 
					var b = Math.floor(Math.random() * (max - min + 1)) + min 
					var c = Math.floor(Math.random() * (max - min + 1)) + min 
					
					console.log(a, b, c)

					var mudarBody = document.body.style.backgroundColor = `rgba(${a}, ${b}, ${c}, 1.0)`;

						var cor = ('R:' + a + ' G:' + b + ' B:' + c)
						var rgba = document.getElementById('botaoCor');
		            	rgba.textContent = cor;

				}

				mudarFundo()


				function mudarFundo2() {
					  var letrasENumeros = Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
					  var corHex = '#'
							for (let i = 0; i < 6; i++) {
				        corHex += letrasENumeros[Math.floor(Math.random() * 16)];
				        
				    }
    					// Aqui, aplicamos a cor de fundo ao elemento com id "menu2"
    					document.body.style.backgroundColor = corHex;

    					var cor2 = ('Hex: ' + corHex)
    					var hex = document.getElementById('botaoCor');
    					hex.textContent = cor2
    				
    					console.log(corHex)
				}

				mudarFundo2()

				function botaoRGBA() {
					    let botao = document.getElementById("botaoCor");
					    
					    botao.onclick = mudarFundo;  // Definindo a função mudarFundo como a função de clique
					    botao.textContent = "Clique para mudar a cor em RGB";  // Atualizando o texto do botão
					}

					function botaoHex() {
					    let botao = document.getElementById("botaoCor");
					    
					    botao.onclick = mudarFundo2;  // Definindo a função mudarFundo2 como a função de clique
					    botao.textContent = "Clique para mudar a cor em HEX";  // Atualizando o texto do botão
					}
									

				
	