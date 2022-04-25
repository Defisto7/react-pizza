import React from 'react'
import {Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux'

import {setCategory} from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'


const categotyNames = [
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые'
  ]

const sortItems = [
  {name: 'популярности', type: 'popylar'},
  {name: 'цена', type: 'price'},
  {name: 'алфавит', type: 'alphabet'}
  ]

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  React.useEffect(() => {
      dispatch(fetchPizzas());
  });

  const onSelectCategory = React.useCallback( index => {
    dispatch(setCategory(index));
  }, []);


  return (
    <div className="container">
          <div className="content__top">
            <Categories onClickItem={onSelectCategory} items={categotyNames}/>
            <SortPopup items={sortItems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoaded ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj}/>) : Array(12).fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index}/>)
            }
          </div>
        </div>
  )
}

export default Home