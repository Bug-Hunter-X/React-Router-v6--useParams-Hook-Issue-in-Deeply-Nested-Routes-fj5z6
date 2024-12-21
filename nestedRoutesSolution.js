The solution involves carefully structuring the route definitions to ensure correct parameter inheritance.  Instead of relying on implicit parameter inheritance, explicitly define the paths of nested routes. 

```javascript
import { BrowserRouter, Routes, Route, useParams, Outlet } from 'react-router-dom';

function ParentRoute() {
  let { parentId } = useParams();
  return (
    <div>
      <h1>Parent Route: {parentId}</h1>
      <Outlet/>
    </div>
  );
}

function ChildRoute() {
  let { parentId, childId } = useParams();
  return (
    <div>
      <h1>Child Route: Parent ID - {parentId}, Child ID - {childId}</h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:parentId" element={<ParentRoute />}>
          <Route path=":childId" element={<ChildRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```