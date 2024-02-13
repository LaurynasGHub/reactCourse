import './main.scss';

//components
import Card from '../Card/Card';

function Main({ setCardData, data, setData }) {
  // const [Data, setData] = useState([mockData]);

  const handleSortData = (direction) => {
    const sortedData = data.toSorted((a, b) => {
      let fa = a.title.toLowerCase(),
        fb = b.title.toLowerCase();

      if (fa < fb) return direction === 'az' ? -1 : 1;
      if (fa > fb) return direction === 'az' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  return (
    <main className="main-container">
      <div className="main-action-btn">
        <button
          onClick={() => {
            handleSortData('az');
          }}
        >
          Sort A-Z
        </button>
        <button
          onClick={() => {
            handleSortData('za');
          }}
        >
          Sort Z-A
        </button>
      </div>
      {data.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            setCardData={setCardData}
          />
        );
      })}
    </main>
  );
}

export default Main;
