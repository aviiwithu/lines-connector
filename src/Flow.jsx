import { useCallback,useMemo } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position
} from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
    {
        id: 'node-1',
        type: 'textUpdater',
        position: { x: 0, y: 0 },
        data: { value: 123 },
      },
  { id: '2', position: { x: 300, y: 0 }, data: { label: '2' } },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  return (
    <ReactFlow
      nodes={nodes}
    nodeTypes={nodeTypes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      
      
    </ReactFlow>
  );
}

export default Flow;
const handleStyle = { left: 10 };

function TextUpdaterNode({ data }) {
    const onChange = useCallback((evt) => {
      console.log(evt.target.value);
    }, []);
   
    return (
      <>
        <Handle type="target" position={Position.Top} />
        <div>
          <label htmlFor="text">Text:</label>
          <input id="text" name="text" onChange={onChange} className="nodrag" />
        </div>
        <Handle type="source" position={Position.Bottom} id="a" />
        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          style={handleStyle}
        />
      </>
    );
  }