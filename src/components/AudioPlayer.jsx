const Container = () => {
  const [list, setList] = useState([]);

  return (
    <div>
      {/* Componente de audio con el archivo de sonido */}
      <AudioPlayer src={backgroundSound} autoPlay loop />

      {/* Resto del contenido del componente */}
      <FormTodo handleAddItem={handleAddItem} />
      <TaskList list={list} setList={setList} />
    </div>
  );
};