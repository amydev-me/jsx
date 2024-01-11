import { useState } from 'react';
import { GoChevronDown, GoChevronLeft} from 'react-icons/go';
// || gives back the first value that is truthy
// && gives the first falsey value or the last truthy value
// hi && there => there last truthy value is there
// false && there => false first falsey value is false 
// 0 && true => 0 first falsey value is 0 
// 50 && null => null first falsey value is null
// 100 && 200 => 200 last truthy value is 200
//  isExpanded && <div>{ item.content }</div> 

function Accordion({ items }) {
  const [ expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpendedIndex) => {
      if(currentExpendedIndex === nextIndex){
        return -1;
      }else {
        return nextIndex;
      }
    })
    // setExpandedIndex(expandedIndex === nextIndex ? -1 : nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = (index === expandedIndex);

    const icon = (
      <span className="text-2xl">
        { isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
      </span>
    );

    return (
      <div key={ item.id }>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={ () => handleClick(index) }>
          {item.label}
          {icon}
        </div>
        { isExpanded && <div className="border-b p-5">{ item.content }</div> }
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">
      { renderedItems }
    </div>
  );
}

export default Accordion;