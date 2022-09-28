import MyTable from "../../components/Table";
import { useSelector, useDispatch } from "react-redux";
import { add, del, Table1Item } from "./table1Slice";
import { RootState } from "../../store";
import type { ColumnsType } from "antd/es/table";
import {
  Card,
  Popconfirm,
  Space,
  Table,
  Button,
  Form,
  Input,
  FormInstance,
  Modal,
} from "antd";
import { createRef, useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";

const Node = () => {
  const data: Table1Item[] = useSelector((state: RootState) => state.table1);
  const dispatch = useDispatch();
  const delControl = (key: number) => {
    dispatch(del(key));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "prototype",
      dataIndex: "prototype",
      key: "prototype",
    },
    {
      title: "Mark",
      dataIndex: "mark",
      key: "mark",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => delControl(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const triggerModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Card>
      <p>节点</p>
      <Button aria-label="right" onClick={triggerModalOpen}>
        add
      </Button>
      <MyTable dataSource={data} columns={columns} />
      <Modal1
        isModalOpen={isModalOpen}
        count={data.length}
        triggerModalOpen={triggerModalOpen}
      />
    </Card>
  );
};

const Modal1 = ({
  isModalOpen,
  triggerModalOpen,
  count,
}: {
  isModalOpen: boolean;
  triggerModalOpen: () => void;
  count: number;
}) => {
  const dispatch = useDispatch();
  const formRef = createRef<FormInstance>();
  const [form] = useForm();
  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 18 },
  };

  useEffect(() => {
    if (formRef.current) {
      formRef.current!.resetFields();
    }
  }, [isModalOpen]);

  const checkOk = async () => {
    try {
      const values = await form.validateFields();
      dispatch(add({ key: `${count + 1}`, ...values }));
      triggerModalOpen();
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  return (
    <Modal
      title="add Modal"
      open={isModalOpen}
      onOk={checkOk}
      onCancel={triggerModalOpen}
    >
      <Form ref={formRef} form={form}>
        <Form.Item
          {...formItemLayout}
          label="name"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="prototype"
          name="prototype"
          rules={[{ required: true, message: "Please input your prototype!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="mark"
          name="mark"
          rules={[{ required: true, message: "Please input your mark!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Node;
