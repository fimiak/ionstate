/* @flow */

import React, { Component } from 'react';

type Props = {
    data: {
        country: string,
        leader: string,
        name: string,
        thumb: string
    },
    docs: [
        {
            headline: {
                print_headline: string
            },
            multimedia: {
                url: string
            },
            web_url: string
        },
        {
            headline: {
                print_headline: string
            },
            multimedia: {
                url: string
            },
            web_url: string
        },
        {
            headline: {
                print_headline: string
            },
            multimedia: {
                url: string
            },
            web_url: string
        }
    ]
};

class RankItem extends Component<Props> {
    render() {
        return(
            <div className="rank-item">
                <div className="rank-item-image">
                    <a href={this.props.data.country} alt="" >
                        <img src={require('../../.././images/bio/' + this.props.data.image)} alt="" />
                    </a>
                </div>
                <div className="rank-item-data">
                    <div className="rank-item-head">
                        <div className="rank-head-name">
                            {this.props.data.leader}
                            <span>{this.props.data.name}</span>
                        </div>
                    </div>
                    <div className="rank-item-articles">
                        <a className="rank-link" href={this.props.docs[0].web_url} alt="">
                            <img className="rank-image" src={require('../../.././images/' + this.props.docs[0].multimedia.url)} alt="" />
                            <span className="rank-headline">{this.props.docs[0].headline.print_headline}</span>
                        </a>

                        <a className="rank-link" href={this.props.docs[1].web_url} alt="">
                            <img className="rank-image" src={require('../../.././images/' + this.props.docs[1].multimedia.url)} alt="" />
                            <span className="rank-headline">{this.props.docs[1].headline.print_headline}</span>
                        </a>

                        <a className="rank-link" href={this.props.docs[2].web_url} alt="">
                            <img className="rank-image" src={require('../../.././images/' + this.props.docs[2].multimedia.url)} alt="" />
                            <span className="rank-headline">{this.props.docs[2].headline.print_headline}</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default RankItem;