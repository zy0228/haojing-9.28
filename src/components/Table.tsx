import { Space, Tag, Table, Button, Form, Input, FormInstance } from "antd";
import type { ColumnsType } from "antd/es/table";

interface TableProps<T> {
  dataSource: T | [];
  columns: ColumnsType<T>;
}

const MyTable = ({ dataSource, columns }: TableProps<any>) => {
  return (
    <>
      <Table size="small" columns={columns} dataSource={dataSource} />
    </>
  );
};

export default MyTable;
