"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _test = require("@playwright/test");
var _default = exports.default = (0, _test.defineConfig)({
  testDir: './tests',
  timeout: 30 * 1000,
  fullyParallel: true,
  workers: 3,
  expect: {
    timeout: 10000
  },
  reporter: 'html',
  use: {
    baseURL: "https://rahulshettyacademy.com/",
    // connectOptions:{
    //   wsEndpoint:process.env.PLAYWRIGHT_SERVICE_URL!,
    // },
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },
  projects: [{
    name: 'setup auth',
    testMatch: /auth\.spec\.ts/
  }, {
    name: 'Chrome',
    dependencies: ['setup auth'],
    testIgnore: /auth\.spec\.ts/,
    use: {
      browserName: 'chromium',
      storageState: 'auth/chromium.json'
    }
  }, {
    name: 'Firefox',
    dependencies: ['setup auth'],
    testIgnore: /auth\.spec\.ts/,
    use: {
      browserName: 'firefox',
      storageState: 'auth/firefox.json'
    }
  }, {
    name: 'Edge',
    dependencies: ['setup auth'],
    testIgnore: /auth\.spec\.ts/,
    use: {
      channel: 'msedge',
      browserName: 'chromium',
      storageState: 'auth/MSEdge.json'
    }
  }]
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdGVzdCIsInJlcXVpcmUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJkZWZhdWx0IiwiZGVmaW5lQ29uZmlnIiwidGVzdERpciIsInRpbWVvdXQiLCJmdWxseVBhcmFsbGVsIiwid29ya2VycyIsImV4cGVjdCIsInJlcG9ydGVyIiwidXNlIiwiYmFzZVVSTCIsImhlYWRsZXNzIiwic2NyZWVuc2hvdCIsInRyYWNlIiwidmlkZW8iLCJwcm9qZWN0cyIsIm5hbWUiLCJ0ZXN0TWF0Y2giLCJkZXBlbmRlbmNpZXMiLCJ0ZXN0SWdub3JlIiwiYnJvd3Nlck5hbWUiLCJzdG9yYWdlU3RhdGUiLCJjaGFubmVsIl0sInNvdXJjZXMiOlsicGxheXdyaWdodC5jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ0BwbGF5d3JpZ2h0L3Rlc3QnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cbiAgXG4gIHRlc3REaXI6Jy4vdGVzdHMnLFxuICB0aW1lb3V0OjMwKjEwMDAsXG4gIGZ1bGx5UGFyYWxsZWw6dHJ1ZSxcbiAgd29ya2VyczozLFxuICBleHBlY3Q6e1xuICAgIHRpbWVvdXQ6MTAwMDBcbiAgfSxcbiAgcmVwb3J0ZXI6J2h0bWwnLFxuICB1c2U6e1xuICAgIGJhc2VVUkw6XCJodHRwczovL3JhaHVsc2hldHR5YWNhZGVteS5jb20vXCIsXG4gICAgLy8gY29ubmVjdE9wdGlvbnM6e1xuICAgIC8vICAgd3NFbmRwb2ludDpwcm9jZXNzLmVudi5QTEFZV1JJR0hUX1NFUlZJQ0VfVVJMISxcbiAgICAvLyB9LFxuICAgIGhlYWRsZXNzOnRydWUsXG4gICAgc2NyZWVuc2hvdDonb25seS1vbi1mYWlsdXJlJyxcbiAgICB0cmFjZToncmV0YWluLW9uLWZhaWx1cmUnLFxuICAgIHZpZGVvOiAncmV0YWluLW9uLWZhaWx1cmUnLFxuICB9LFxuXG4gIHByb2plY3RzOltcbiAgICB7XG4gICAgICBuYW1lOidzZXR1cCBhdXRoJyxcbiAgICAgIHRlc3RNYXRjaDovYXV0aFxcLnNwZWNcXC50cy8sXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOidDaHJvbWUnLFxuICAgICAgZGVwZW5kZW5jaWVzOlsnc2V0dXAgYXV0aCddLFxuICAgICAgdGVzdElnbm9yZTovYXV0aFxcLnNwZWNcXC50cy8sXG4gICAgICB1c2U6e1xuICAgICAgICBicm93c2VyTmFtZTonY2hyb21pdW0nLFxuICAgICAgICBzdG9yYWdlU3RhdGU6J2F1dGgvY2hyb21pdW0uanNvbidcbiAgICAgICAgXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOidGaXJlZm94JyxcbiAgICAgIGRlcGVuZGVuY2llczpbJ3NldHVwIGF1dGgnXSxcbiAgICAgIHRlc3RJZ25vcmU6L2F1dGhcXC5zcGVjXFwudHMvLFxuICAgICAgdXNlOntcbiAgICAgICAgYnJvd3Nlck5hbWU6J2ZpcmVmb3gnLFxuICAgICAgICBzdG9yYWdlU3RhdGU6J2F1dGgvZmlyZWZveC5qc29uJ1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTonRWRnZScsXG4gICAgICBkZXBlbmRlbmNpZXM6WydzZXR1cCBhdXRoJ10sXG4gICAgICB0ZXN0SWdub3JlOi9hdXRoXFwuc3BlY1xcLnRzLyxcbiAgICAgIHVzZTp7XG4gICAgICAgICBjaGFubmVsOiAnbXNlZGdlJyxcbiAgICAgICAgIGJyb3dzZXJOYW1lOiAnY2hyb21pdW0nLFxuICAgICAgICAgc3RvcmFnZVN0YXRlOidhdXRoL01TRWRnZS5qc29uJ1xuICAgICAgfSxcbiAgICB9XG4gIF1cbn0pXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtBQUE4QyxJQUFBQyxRQUFBLEdBQUFDLE9BQUEsQ0FBQUMsT0FBQSxHQUcvQixJQUFBQyxrQkFBWSxFQUFDO0VBRzFCQyxPQUFPLEVBQUMsU0FBUztFQUNqQkMsT0FBTyxFQUFDLEVBQUUsR0FBQyxJQUFJO0VBQ2ZDLGFBQWEsRUFBQyxJQUFJO0VBQ2xCQyxPQUFPLEVBQUMsQ0FBQztFQUNUQyxNQUFNLEVBQUM7SUFDTEgsT0FBTyxFQUFDO0VBQ1YsQ0FBQztFQUNESSxRQUFRLEVBQUMsTUFBTTtFQUNmQyxHQUFHLEVBQUM7SUFDRkMsT0FBTyxFQUFDLGlDQUFpQztJQUN6QztJQUNBO0lBQ0E7SUFDQUMsUUFBUSxFQUFDLElBQUk7SUFDYkMsVUFBVSxFQUFDLGlCQUFpQjtJQUM1QkMsS0FBSyxFQUFDLG1CQUFtQjtJQUN6QkMsS0FBSyxFQUFFO0VBQ1QsQ0FBQztFQUVEQyxRQUFRLEVBQUMsQ0FDUDtJQUNFQyxJQUFJLEVBQUMsWUFBWTtJQUNqQkMsU0FBUyxFQUFDO0VBQ1osQ0FBQyxFQUNEO0lBQ0VELElBQUksRUFBQyxRQUFRO0lBQ2JFLFlBQVksRUFBQyxDQUFDLFlBQVksQ0FBQztJQUMzQkMsVUFBVSxFQUFDLGdCQUFnQjtJQUMzQlYsR0FBRyxFQUFDO01BQ0ZXLFdBQVcsRUFBQyxVQUFVO01BQ3RCQyxZQUFZLEVBQUM7SUFFZjtFQUNGLENBQUMsRUFDRDtJQUNFTCxJQUFJLEVBQUMsU0FBUztJQUNkRSxZQUFZLEVBQUMsQ0FBQyxZQUFZLENBQUM7SUFDM0JDLFVBQVUsRUFBQyxnQkFBZ0I7SUFDM0JWLEdBQUcsRUFBQztNQUNGVyxXQUFXLEVBQUMsU0FBUztNQUNyQkMsWUFBWSxFQUFDO0lBQ2Y7RUFDRixDQUFDLEVBQ0Q7SUFDRUwsSUFBSSxFQUFDLE1BQU07SUFDWEUsWUFBWSxFQUFDLENBQUMsWUFBWSxDQUFDO0lBQzNCQyxVQUFVLEVBQUMsZ0JBQWdCO0lBQzNCVixHQUFHLEVBQUM7TUFDRGEsT0FBTyxFQUFFLFFBQVE7TUFDakJGLFdBQVcsRUFBRSxVQUFVO01BQ3ZCQyxZQUFZLEVBQUM7SUFDaEI7RUFDRixDQUFDO0FBRUwsQ0FBQyxDQUFDIiwiaWdub3JlTGlzdCI6W119