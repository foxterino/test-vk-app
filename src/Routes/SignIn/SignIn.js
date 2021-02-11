import React from 'react';
import {
  Button,
  Div,
  FormItem,
  FormLayout,
  FormLayoutGroup,
  Group,
  Input,
  Panel,
  PanelHeader,
  View
} from '@vkontakte/vkui';

const SignIn = () => {
  return (
    <View id='view' activePanel='signin'>
      <Panel id='signin'>
        <PanelHeader>Sign In</PanelHeader>
        <Group>
          <FormLayout>
            <FormLayoutGroup mode='vertical'>
              <FormItem top='Username'>
                <Input />
              </FormItem>
              <FormItem top='Password'>
                <Input />
              </FormItem>
            </FormLayoutGroup>
            <Div>
              <Button size='l' stretched>
                Sign In
              </Button>
            </Div>
          </FormLayout>
        </Group>
      </Panel>
    </View>
  );
};

export { SignIn };
