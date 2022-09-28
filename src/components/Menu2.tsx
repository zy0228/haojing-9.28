import G6 from "@antv/g6";
import { useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table1Item } from "../features/node/table1Slice";
import { Table2Item } from "../features/side/table2Slice";
import { RootState } from "../store";

const Menu2 = () => {
  const dataRoute: Table2Item[] = useSelector(
    (state: RootState) => state.table2,
  );
  const dataNode: Table1Item[] = useSelector(
    (state: RootState) => state.table1,
  );
  const gRef = useRef<any>();

  const nodes = useMemo(
    () =>
      dataNode.map((item) => ({
        id: item.name,
        label: item.name,
      })),
    [dataNode],
  );

  const edges = useMemo(
    () =>
      dataRoute.map((item) => ({
        source: item.start,
        target: item.end,
      })),
    [dataRoute],
  );

  const graph = useRef<any>();

  const findItemInData = (id: any) => {
    return dataNode.find((item) => item.name == id);
  };

  useEffect(() => {
    if (!graph.current) {
      graph.current = new G6.Graph({
        container: "g6",
        width: 800, // Number，必须，图的宽度
        height: 500,
      });

      graph.current.data({ nodes, edges }); // 读取 Step 2 中的数据源到图上
      graph.current.render();

      graph.current.on("click", (env: any) => {
        const node = findItemInData(env.item._cfg.id);
        if (node) {
          alert(JSON.stringify(node));
        }
      });
    } else {
      graph.current.clear();

      graph.current.data({ nodes, edges }); // 读取 Step 2 中的数据源到图上
      graph.current.render();
    }

    () => {
      graph.current.clear();
    };
  }, [nodes, edges]);

  return (
    <div style={{ display: "flex" }}>
      <div ref={gRef} id="g6"></div>
      <div></div>
    </div>
  );
};

export default Menu2;
