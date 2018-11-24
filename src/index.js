import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container">
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            timeAgo={faker.date.month()}
            commentText={faker.lorem.slug()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            timeAgo={faker.date.month()}
            commentText={faker.lorem.slug()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            avatar={faker.image.avatar()}
            author={faker.name.firstName()}
            timeAgo={faker.date.month()}
            commentText={faker.lorem.slug()}
          />
        </ApprovalCard>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
