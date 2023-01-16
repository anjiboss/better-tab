export interface KonvaNodeComponent<
  Node extends Konva.Node,
  Props = Konva.NodeConfig
  // We use React.ClassAttributes to fake the 'ref' attribute. This will ensure
  // consumers get the proper 'Node' type in 'ref' instead of the wrapper
  // component type.
> extends React.FC<Props & KonvaNodeEvents & React.ClassAttributes<Node>> {
  getPublicInstance(): Node;
  getNativeNode(): Node;
  // putEventListener(type: string, listener: Function): void;
  // handleEvent(event: Event): void;
  children?: React.ReactNode;
}

export interface User {
  username: string;
  firstname: string;
  lastname: string;
  createAt: Date;
  updateAt: Date;
}

export type RequestError = AxiosError<{
  error: {
    message: string;
  };
}>;

export interface IStick {
  id: string;
  title: string;
  url: string;
  updatedAt: Date;
  icon: {
    isCached: boolean;
    base64: string;
  };
  position: {
    x: number;
    y: number;
  };
}
