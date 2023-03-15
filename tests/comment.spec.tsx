import * as React from 'react'
import { test, expect } from '@playwright/experimental-ct-react';
import Comment from '../src/components/comment/Comment';


test('App should work', async ({ mount, page }) => {
  const component = await mount(
    <Comment 
      createdAt='today'
      avatar='https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/715.jpg'
      author='Author'
      text='Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text' 
    />
  );
  await expect(page.locator("li")).toHaveScreenshot()
});