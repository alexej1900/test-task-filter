import Head from 'next/head';
import FilterBlockComponent from '../../components/filterBlockComponent';
import HeaderComponent from '../../components/headerComponent';
import ItemListComponent from '../../components/itemListComponent';
import { ItemData } from '../../interfaces';
import styles from '../../styles/filter.module.scss';

const FilterPage = ({ items }: { items: ItemData[] }) => {
  return (
    <>
      <Head>
        <title>Stahl Filter</title>
      </Head>
      <div className={styles.container}>
        <HeaderComponent/>
        <main>
          <FilterBlockComponent/>
          <ItemListComponent data={items}/>
        </main>
      </div>
    </>
  )
}

FilterPage.getInitialProps = async ({ query }: { query: { type: string }; }) => {
  const response = await fetch(`http://localhost:4200/items?type=${query.type}`);
  const items: ItemData[] = await response.json();

  return {
    items
  }
}

export default FilterPage
