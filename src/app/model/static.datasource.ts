import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
private products: Product[] = [
new Product(1, "Chuteira", "Calçados", "Product 1 (Category 1)", 100,"https://decathlonpro.vteximg.com.br/arquivos/ids/2179325-500-500/agility-900-fg-sr-s218-black---014-----Expires-on-31-03-2023_1353485.jpg?v=636728592906930000"),
new Product(2, "Tenis Adidas", "Calçados", "Product 2 (Category 1)", 100, "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/175b377ca83441278f39a7fe00a64e74_9366/Tenis_Adiease_Preto_BY4028_01_standard.jpg"),
new Product(3, "Tenis Nike", "Calçados", "Product 3 (Category 1)", 100, "https://static.netshoes.com.br/produtos/tenis-nike-quest-2-masculino/26/HZM-1743-026/HZM-1743-026_zoom1.jpg"),
new Product(4, "Tenis Vans", "Calçados", "Product 4 (Category 1)", 100, "https://surfalive.fbitsstatic.net/img/p/tenis-vans-old-skool-comfycush-black-true-white-94278/260186.jpg?w=800&h=800&v=no-change"),
new Product(5, "Chuteira Nike", "Calçados", "Product 5 (Category 1)", 100, "https://images.lojanike.com.br/1024x1024/produto/169634_1592639_20190806164934.png"),
new Product(6, "Colete", "Artigos para jogos", "Product 6 (Category 2)", 100, "https://static.netshoes.com.br/produtos/colete-de-futebol-light-kit-10-pcs/33/BDH-0045-833/BDH-0045-833_zoom1.jpg"),
new Product(7, "Bola de Futebol", "Artigos para jogos", "Product 7 (Category 2)", 100, "https://http2.mlstatic.com/bola-futebol-campo-adidas-telstar-18-copa-do-mundo-fifa-D_NQ_NP_748648-MLB31056733972_062019-F.jpg"),
new Product(8, "Apito", "Artigos para jogos", "Product 8 (Category 2)", 100, "https://www.mundodasbolas.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/p/apito_fox40_pearl_.jpg"),
new Product(9, "Cartão amarelo", "Artigos para jogos", "Product 9 (Category 2)", 100, "https://image.freepik.com/fotos-gratis/mao-segurando-o-cartao-amarelo-para-cima_13339-76213.jpg"),
new Product(10, "Cartão vermelho", "Artigos para jogos", "Product 10 (Category 2)", 100, "https://images.uncyc.org/commons/2/25/Cartao-vermelho.gif"),
new Product(11, "Camisa Flamengo", "Uniformes", "Product 11 (Category 3)", 100, "https://wqsurf.vteximg.com.br/arquivos/ids/176435-1000-1000/camisa-flamengo-jogo-1-adidas-2019-bs2-58454-1.jpg?v=636987970579800000"),
new Product(12, "Camisa Seleção Brasileira", "Uniformes", "Produto 12 (Category 3)", 100, "https://images.lojanike.com.br/1024x1024/produto/9414_1561897_20190730113915.png"),
new Product(13, "Camisa Barcelona", "Uniformes", "Product 13 (Category 3)", 100, "https://static.wixstatic.com/media/fb0c9b_f681443d9d544ad29ccd54345d0aaa11~mv2_d_1200_1200_s_2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"),
new Product(14, "Camisa Visitante Flamengo", "Uniformes", "Produto 14 (Category 3)", 100, "https://wqsurf.vteximg.com.br/arquivos/ids/176445-1000-1000/camisa-flamengo-jogo-2-adidas-2019-bs2-58455-1.jpg?v=636988146100200000"),
new Product(15, "Camisa Alemanha", "Uniformes", "Product 15 (Category 3)", 100, "https://www.netshirtssports.com.br/image/cache/catalog/SELE%C3%87%C3%95ES/ale%20frente-800x800.png"),
];
getProducts(): Observable<Product[]> {
return from([this.products]);
}
}
