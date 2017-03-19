require 'test_helper'

class NgPageControllerTest < ActionDispatch::IntegrationTest
  test "should get loading" do
    get ng_page_loading_url
    assert_response :success
  end

end
