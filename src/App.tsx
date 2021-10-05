import { useState } from 'react';
import * as Styles from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Isso é somente um teste', done: false}
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  return (
    <Styles.Container>
      <Styles.Area>
        <Styles.Header> Lista de tarefas</Styles.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </Styles.Area>
    </Styles.Container>
  );

}

export default App;