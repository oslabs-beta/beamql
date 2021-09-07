import '@testing-library/react';
import CodeOutput from '../client/Components/CodeOutput';

// test('CodeOutput', () => {
//   expect(CodeOutput()).toBe();
// });
 


test('loads and displays codebox', async () => {
    render(CodeOutput)
  
    fireEvent.click(screen.getByText('Load Greeting'))
  
    await waitFor(() => screen.getByRole('heading'))
  
    expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    expect(screen.getByRole('button')).toBeDisabled()
  })
  
  test('handles server error', async () => {
    server.use(
      rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
  