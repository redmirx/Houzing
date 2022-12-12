import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useParams } from "react-router-dom";
import { useRequest } from "./../../hooks/useRequest";

const HouseItem = () => {
  const [data, setData] = useState();
  const params = useParams();
  const request = useRequest();

  useEffect(() => {
    request({ url: `/houses/id/${params?.id}` }).then((res) => {
      // console.log(res);
      setData(res?.data);
    });
  }, [params?.id]);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <Container>
      <h1>House Item</h1>
      {/* {console.log(params)} */}
      {console.log(data)}
    </Container>
  );
};

export default HouseItem;
