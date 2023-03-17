import useCounter from "../hooks/useCounter";

import Card from "./Card";

const ForwardCounter = () => {
  const res = useCounter(true);
  return <Card>{res}</Card>;
};

export default ForwardCounter;

//  const [counter, setCounter] = useState(0);

//  useEffect(() => {
//    const interval = setInterval(() => {
//      setCounter((prevCounter) => prevCounter + 1);
//    }, 1000);

//    return () => clearInterval(interval);
//  }, []);
