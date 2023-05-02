//https://www.youtube.com/watch?v=z8lDwLKthr8&t=0s
import React, { ReactElement, ReactNode } from 'react';


const Example: React.FC = () => {

    function Heading ({title}: { title: string }) {
        return <h1>{title}</h1>;
    
    };
    
    function HeadingContent ({children}: { children: ReactNode }) {
        return <>{children}</>;
    
    };
    
    const defaultContainerProps = {
        heading: <h1>My Heading</h1>,
    };
    
    type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
    
    function Container ({heading, children}: ContainerProps): ReactElement {
      return <>{heading} {children}</>;
      
    };
    
    Container.defaultProps = defaultContainerProps;
    
    function TextWithNumber ({
        children,
        heading,
    }: {
        heading ?: (num: number) => ReactNode;
        children: (num: number) => ReactNode;
    }) {
        const [state, setState] = React.useState<number>(1);
        return (
        <div>
          {heading && <span>{heading?.(state)}</span>}
          {children(state)}
          <button onClick={() => setState(state + 1)}>Add</button>
        </div>
    
    
        );
    }
    
    //List items
    function List<ListItem>({
        items,
        render,
    }: {
        items: ListItem[];
        render: (item: ListItem) => ReactNode;
    }) {
      return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{render(item)}</li>
          ))}
        </ul>
      );
    }
    
    // Class component
    class MyHeader extends React.Component<{ 
      title: ReactNode }> {
      render(props = this.props) {
        return <h1>{props.title}</h1>;
      }
    }
    
    
      return (
        <div className="App">
            <Heading title="Head" />
            <HeadingContent><h1>Content</h1></HeadingContent>
            <Container>Foo</Container>
            <TextWithNumber heading={(number:number) => <h1>Heading is {number}</h1>}>
              {(number:number) => <div>Today's the number is {number}</div>}</TextWithNumber>
            <List items={["Jack", "Jane", "Smith"]} render={(item: string) => <div>{item.toLowerCase()}</div>} />
            <MyHeader title="My Header Class" />
            
        </div>
      );
    }
    

export default Example;