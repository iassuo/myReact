import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        const { list, getMoreList, page } = this.props;
        // console.log(list,'123')
        return (
            <div>
                {
                    list.map((item, index) => (
                        <Link key={index} to={"/detail/" + item.get('id')}>
                            <ListItem >
                                <img
                                    alt=""
                                    className="pic"
                                    src={item.get('imgUrl')}
                                />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>更多内容</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articalList']),
    page: state.getIn(['home', 'articalPage']),
})

const mapDispatch = (dispatch) => ({
    getMoreList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
})

export default connect(mapState, mapDispatch)(List)