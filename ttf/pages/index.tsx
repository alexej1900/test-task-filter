import FilterBlockComponent from '../components/filterBlockComponent';
import HeaderComponent from '../components/headerComponent';
import ItemListComponent from '../components/itemListComponent';
import { ItemData } from '../interfaces';
import styles from '../styles/Home.module.scss';

const Home = ({ items }: {items: ItemData[]} ) => {
  
  return (
    <>
      <div className={styles.container}>
        <HeaderComponent/>
        <main>
          <FilterBlockComponent/>
          <ItemListComponent itemData={items}/>
        </main>
      </div>
    </>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/items');
  let items: ItemData[] = await response.json();

  // items = items.filter((item) => item.Zähigkeit === 'Extra')

  return {
    items
  }
}

export default Home
