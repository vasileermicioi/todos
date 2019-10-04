import initStoryshots, {
  multiSnapshotWithOptions,
} from '@storybook/addon-storyshots'

initStoryshots({
  suite: '',
  test: multiSnapshotWithOptions({}),
})
