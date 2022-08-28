import { memo,useMemo } from "react";
import Right from "./Right";
import Left from "./Left";
import { BodyStyle } from "./style/Body-Style";

function Body(props) {
  const obj = useMemo(()=>{
    return props.data
  })
  return (
    <BodyStyle>
      <Left />
      <Right data={obj} />
    </BodyStyle>
  );
}
export default memo(Body);
