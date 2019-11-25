import React, {Component} from 'react'
import styled from 'styled-components'
import SquareBox from '../components/SquareBox'
import LevelCounter from '../components/LevelCounter'
import Button from '../components/Button'

const MianWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 35rem;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #eaeaea;
    height: 20rem;
    width: 35rem;
`
const SquareBoxWrapper = styled.div`
    display: flex;
`
const ErrorText = styled.h4`
    color: red;
`
const WonText = styled.h3`
    color: green;
`
const colorBox = ['red', 'blue', 'green', 'yellow']

class PatternPlay extends Component {
    constructor(props){
        super(props)
        this.state = {
            level: 1,
            randomArray: [],
            count: 2,
            highlight: null,
            errorClick: false,
            userWon: false,
            requestInput:false
        }
    }
    playAnimate=()=>{
        this.hilightLoop(this.state.randomArray, 0);
    }

    hilightLoop=(arr, index)=>{
        this.setState({
            highlight: arr[index]
        }, ()=>{
            setTimeout(()=>{if(arr.length<=index+1){
                this.setState({
                    highlight: null
                })
            }
            else{
                this.hilightLoop(arr, index+1)
            }}, 500)
        })
    }

    onClickBoxes=(index)=>{
       if(this.state.randomArray.length !== 0 ){
        this.selectUserInput(index)
       }
    }

    selectUserInput=(index)=>{
        if(index === this.state.randomArray[0]){
            let modifiedArray = [...this.state.randomArray].slice(1)
            this.setState({randomArray: modifiedArray}, ()=>{
                if(this.state.level === 10 && this.state.randomArray.length ===0){
                    this.setState({
                        userWon: true, level: 1, randomArray: [], count: 2,requestInput: false
                        
                    })
                }
                else if(this.state.randomArray.length===0){
                    this.setState({count: this.state.count+1, level: this.state.level+1,requestInput: false})
                }
            })
        }
        else{
            this.setState({
                count: 2, level : 1, randomArray: [], highlight: null, errorClick: true,requestInput: false
            })
        }
    }

    requestUserInput=(len)=>{
        if(len == this.state.randomArray.length){
            this.setState({requestInput: true}) 
        }
    }
    generatePattern = () => {
        const {count}=this.state
        let arr =[]
        while(arr.length<count && arr.length <=10){
            let randNumber = Math.floor(Math.random() * 4);
            if(arr.length && randNumber===arr[arr.length-1]){
                arr = []
            }
            else{
                arr.push(randNumber);
            }
        }
        this.setState({randomArray: arr,errorClick: false, userWon: false}, this.playAnimate) 
        setTimeout(()=>this.requestUserInput(arr.length), 5000)
    }

    render(){
        let {level, errorClick, userWon, requestInput, randomArray} = this.state
        return(
            <MianWrapper>
                {requestInput? <ErrorText>Please select the boxes</ErrorText> : null }
                { errorClick ? <ErrorText>You have clicked the wrong pattern</ErrorText> : null }
                { userWon ? <WonText>You have won</WonText> : null }
                {level > 1 ? <WonText>{`You have successfully completed level ${level-1}`}</WonText> : null}
                <Wrapper>
                <LevelCounter level={level}></LevelCounter>
                <SquareBoxWrapper>
                {colorBox.map((el, index) => (
                    <SquareBox key={index} highlighted={this.state.highlight===index} color={el} onClick={()=>this.onClickBoxes(index)}></SquareBox>
                ))}
                </SquareBoxWrapper>
                {randomArray.length>0 && <div>Please Select {randomArray.length} boxes</div>}
                <Button onClick={this.generatePattern}>play</Button>
            </Wrapper>
            </MianWrapper>
        )
    }
}

export default PatternPlay