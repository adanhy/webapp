import { Card, IconButton, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';
import * as SC from './styles';
import { ReactComponent as LikeIcon } from 'assets/icons/like-outlined.svg';
import { ReactComponent as DislikeIcon } from 'assets/icons/dislike.svg';
import { ReactComponent as CommentIcon } from 'assets/icons/comment.svg';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContentEditor from 'components/ContentEditor';
import { ISection, ISuggestion } from 'types/entities';

const SectionCard = (props: ISection) => {
  const [suggestionIndex, setSuggestionIndex] = useState<number>(0);

  const updateContent = (newSuggestionIndex: number) => {
    setSuggestionIndex(newSuggestionIndex);
  };

  const forwardSuggestion = () => {
    if (suggestionIndex + 1 < props.suggestions.length) {
      const newIndex = suggestionIndex + 1;
      updateContent(newIndex);
    }
  };

  const backwardsSuggestion = () => {
    if (suggestionIndex - 1 >= 0) {
      const newIndex = suggestionIndex - 1;
      updateContent(newIndex);
    }
  };

  const CheckedIconRender = (props: { isSelected: boolean }) => {
    if (props.isSelected) {
      return (
        <span>
          <CheckCircleOutlineIcon sx={{ color: '#24ebd3' }} />
        </span>
      );
    }
    return <span></span>;
  };

  return (
    <Card variant="elevation" elevation={0}>
      <Stack direction="row" justifyContent="space-around" alignItems="center">
        <SC.ButtonColumn direction="column" order="1" width="64px">
          <SC.SectionButton onClick={backwardsSuggestion} disabled={suggestionIndex === 0}>
            <ArrowBackIosNewIcon />
          </SC.SectionButton>
        </SC.ButtonColumn>
        <SC.SectionDataColumn direction="column" order="2">
          <SC.SectionTitleRow direction="row">
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '14px',
                color: '#E0E0E0',
              }}
            >
              Section {props.id + 1}
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: '#adb2b8',
              }}
            >
              Version {suggestionIndex + 1} of {props.suggestions.length}
            </Typography>
            <CheckedIconRender isSelected={true} />
          </SC.SectionTitleRow>
          <SC.SectionContentRow
            direction="row"
            sx={{
              padding: 0,
            }}
          >
            <Typography
              sx={{
                fontWeight: '400',
                color: 'white',
                paddingTop: '1rem',
                paddingButtom: '1rem',
              }}
            >
              {props.suggestions.map((suggestion: ISuggestion) => {
                if (suggestion.content) {
                  return <ContentEditor initialContent={suggestion.content} readonly={true} />;
                }
              })}
            </Typography>
          </SC.SectionContentRow>
          <SC.SectionButtonsRow direction="row">
            <SC.iconNumberContainter>
              <IconButton>
                <LikeIcon />
              </IconButton>
              <Typography paddingLeft="4px" paddingRight="4px" color="#24ebd3">
                {12}
              </Typography>
            </SC.iconNumberContainter>
            <SC.iconNumberContainter>
              <IconButton>
                <DislikeIcon />
              </IconButton>
              <Typography paddingLeft="4px" paddingRight="4px">
                {13}
              </Typography>
            </SC.iconNumberContainter>
            <SC.iconNumberContainter>
              <IconButton>
                <CommentIcon />
              </IconButton>
              <Typography paddingLeft="4px" paddingRight="4px">
                {5}
              </Typography>
            </SC.iconNumberContainter>
          </SC.SectionButtonsRow>
        </SC.SectionDataColumn>
        <SC.ButtonColumn direction="column" order="3">
          <SC.SectionButton
            disabled={suggestionIndex === props.suggestions.length - 1}
            onClick={forwardSuggestion}
          >
            <ArrowForwardIosIcon />
          </SC.SectionButton>
        </SC.ButtonColumn>
      </Stack>
    </Card>
  );
};

export default SectionCard;
