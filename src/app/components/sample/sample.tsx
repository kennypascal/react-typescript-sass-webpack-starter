import './sample.scss';
import * as React from 'react';

export interface ISampleProps { }

export default class Sample extends React.Component<ISampleProps> {
  public render() {
    return (
      <div className="sample">
        <div className="sample__content">
          <div className="fadeInUp animated">
            <h1>Sample</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    );
  }
}
