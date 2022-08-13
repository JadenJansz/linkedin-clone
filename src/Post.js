import { Avatar } from '@mui/material';
import React from 'react';
import InputOption from './InputOption';
import "./Post.css";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Post({ name, description, message, photoUrl }) {
  return <div className='post'>
      <Avatar />
      <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
      </div>

      <div className='post__body'>
          <p>{message}</p>
      </div>

      <div className='post__buttons'>
          <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
          <InputOption Icon={CommentOutlinedIcon} title="Comment" color="gray"/>
          <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
          <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
      </div>
  </div>;
}

export default Post;
