import { voteComponent } from './vote.component';

describe('voteComponent', () => {
    //Arrange
    let component: voteComponent;

    beforeEach(() => {
        component = new voteComponent();
    });

    it('should increment totalVotes when upvoted', () => {
        //Act
        component.upVote();
        //Assert
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement totalVotes when downvotes', () => {
        //Act
        component.downVote();
        //Assert
        expect(component.totalVotes).toBe(-1);
    });
});