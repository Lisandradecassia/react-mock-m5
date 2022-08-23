import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Form from "../Form/Form";
import Button from "../Button/Button";
import Description from "../Description/Description";
import S from "./Main.module.css";
import FormBelow from "../FormBelow/FormBelow";

let listProducts = [];
const Main = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  async function handleRequisicao() {
    const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`;
    const response = await fetch(url);
    const json = await response.json();

    if (json.products) {
      listProducts = listProducts.concat(json.products);
    }

    console.log(listProducts);
    setProducts(listProducts);
    console.log(products);
  }

  useEffect(() => {
    handleRequisicao();
  }, [page]);

  return (
    <main className={S.main}>
      <section className={S.description}>
        <Description />
        <Form />
      </section>

      <section className={S.secEspecial}>
        <hr></hr>
        <h3>Sua seleção especial!</h3>
        <hr></hr>
      </section>

      <section className={S.cards}>
        {products.map((item, index) => {
          return (
            <Product
              img={item.image}
              nome={item.name}
              desc={item.description}
              de={item.oldPrice}
              por={item.price}
              vezes={item.installments.count}
              ou={item.installments.value}
              key={index}
            ></Product>
          );
        })}
      </section>

      <section>
        <Button
          onClick={() => {
            setPage(page + 1);
          }}
          style={S.button}
          content="Ainda mais produtos aqui!"
        ></Button>
      </section>

      <section className={S.secNovidade}>
        <hr></hr>
        <h3>Compartilhe a novidade</h3>
        <hr></hr>
      </section>

      <section>
        <h4 className={S.p}>
          Quer que seus amigos também ganhem a lista personalizada deles?
          Preencha agora!
        </h4>
        <FormBelow />
      </section>
    </main>
  );
};

export default Main;
