<!--

classDiagram
class actions{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> actor_id NOT NULL
   VARCHAR<50> actor_type NOT NULL
   TEXT context
   DATETIME created_at NOT NULL
   VARCHAR<50> event NOT NULL
   VARCHAR<24> resource_id
   VARCHAR<50> resource_type NOT NULL
}
class api_keys{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> integration_id
   DATETIME last_seen_at
   VARCHAR<50> last_seen_version
   VARCHAR<24> role_id
   VARCHAR<191> secret NOT NULL
   VARCHAR<50> type NOT NULL
   DATETIME updated_at
   VARCHAR<24> user_id
}
class automated_email_recipients{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> automated_email_id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> member_email NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<191> member_name
   VARCHAR<36> member_uuid NOT NULL
   DATETIME updated_at
}
class welcome_email_automated_emails{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   INTEGER delay_days NOT NULL
   VARCHAR<24> email_design_setting_id NOT NULL
   LONGTEXT lexical
   VARCHAR<24> next_welcome_email_automated_email_id
   VARCHAR<191> sender_email
   VARCHAR<191> sender_name
   VARCHAR<191> sender_reply_to
   VARCHAR<300> subject NOT NULL
   DATETIME updated_at
   VARCHAR<24> welcome_email_automation_id NOT NULL
}
class welcome_email_automations{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> name NOT NULL
   VARCHAR<191> slug NOT NULL
   VARCHAR<50> status NOT NULL
   DATETIME updated_at
}
class email_design_settings{
 *VARCHAR<24> id NOT NULL
   VARCHAR<50> background_color NOT NULL
   VARCHAR<191> body_font_category NOT NULL
   VARCHAR<50> button_color
   VARCHAR<50> button_corners NOT NULL
   VARCHAR<50> button_style NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<50> divider_color
   TEXT footer_content
   VARCHAR<50> header_background_color NOT NULL
   VARCHAR<2000> header_image
   VARCHAR<50> image_corners NOT NULL
   VARCHAR<50> link_color
   VARCHAR<50> link_style NOT NULL
   VARCHAR<50> section_title_color
   TINYINT show_badge NOT NULL
   TINYINT show_header_icon NOT NULL
   TINYINT show_header_title NOT NULL
   VARCHAR<191> slug NOT NULL
   VARCHAR<191> title_font_category NOT NULL
   VARCHAR<50> title_font_weight NOT NULL
   DATETIME updated_at
}
class benefits{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> name NOT NULL
   VARCHAR<191> slug NOT NULL
   DATETIME updated_at
}
class brute{
 *VARCHAR<191> key NOT NULL
   INTEGER count NOT NULL
   BIGINT firstRequest NOT NULL
   BIGINT lastRequest NOT NULL
   BIGINT lifetime NOT NULL
}
class collections{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<2000> description
   VARCHAR<2000> feature_image
   TEXT filter
   VARCHAR<191> slug NOT NULL
   VARCHAR<191> title NOT NULL
   VARCHAR<50> type NOT NULL
   DATETIME updated_at
}
class collections_posts{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> collection_id NOT NULL
   VARCHAR<24> post_id NOT NULL
   INTEGER sort_order NOT NULL
}
class posts{
 *VARCHAR<24> id NOT NULL
   TEXT canonical_url
   TEXT codeinjection_foot
   TEXT codeinjection_head
   VARCHAR<50> comment_id
   DATETIME created_at NOT NULL
   VARCHAR<2000> custom_excerpt
   VARCHAR<100> custom_template
   TEXT email_recipient_filter NOT NULL
   VARCHAR<2000> feature_image
   TINYINT featured NOT NULL
   LONGTEXT html
   LONGTEXT lexical
   VARCHAR<6> locale
   LONGTEXT mobiledoc
   VARCHAR<24> newsletter_id
   LONGTEXT plaintext
   DATETIME published_at
   VARCHAR<24> published_by
   TINYINT show_title_and_feature_image NOT NULL
   VARCHAR<191> slug NOT NULL
   VARCHAR<50> status NOT NULL
   VARCHAR<2000> title NOT NULL
   VARCHAR<50> type NOT NULL
   DATETIME updated_at
   VARCHAR<36> uuid NOT NULL
   VARCHAR<50> visibility NOT NULL
}
class newsletters{
 *VARCHAR<24> id NOT NULL
   VARCHAR<50> background_color NOT NULL
   VARCHAR<191> body_font_category NOT NULL
   VARCHAR<50> button_color
   VARCHAR<50> button_corners NOT NULL
   VARCHAR<50> button_style NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<2000> description
   VARCHAR<50> divider_color
   TINYINT feedback_enabled NOT NULL
   TEXT footer_content
   VARCHAR<50> header_background_color NOT NULL
   VARCHAR<2000> header_image
   VARCHAR<50> image_corners NOT NULL
   VARCHAR<50> link_color
   VARCHAR<50> link_style NOT NULL
   VARCHAR<191> name NOT NULL
   VARCHAR<50> post_title_color
   VARCHAR<50> section_title_color
   VARCHAR<191> sender_email
   VARCHAR<191> sender_name
   VARCHAR<191> sender_reply_to NOT NULL
   TINYINT show_badge NOT NULL
   TINYINT show_comment_cta NOT NULL
   TINYINT show_excerpt NOT NULL
   TINYINT show_feature_image NOT NULL
   TINYINT show_header_icon NOT NULL
   TINYINT show_header_name NOT NULL
   TINYINT show_header_title NOT NULL
   TINYINT show_latest_posts NOT NULL
   TINYINT show_post_title_section NOT NULL
   TINYINT show_share_button NOT NULL
   TINYINT show_subscription_details NOT NULL
   VARCHAR<191> slug NOT NULL
   INTEGER sort_order NOT NULL
   VARCHAR<50> status NOT NULL
   TINYINT subscribe_on_signup NOT NULL
   VARCHAR<191> title_alignment NOT NULL
   VARCHAR<191> title_font_category NOT NULL
   VARCHAR<50> title_font_weight NOT NULL
   DATETIME updated_at
   VARCHAR<36> uuid NOT NULL
   VARCHAR<50> visibility NOT NULL
}
class comment_likes{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> comment_id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
   DATETIME updated_at NOT NULL
}
class comments{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   DATETIME edited_at
   LONGTEXT html
   VARCHAR<24> in_reply_to_id
   VARCHAR<24> member_id
   VARCHAR<24> parent_id
   VARCHAR<24> post_id NOT NULL
   VARCHAR<50> status NOT NULL
   DATETIME updated_at NOT NULL
}
class members{
 *VARCHAR<24> id NOT NULL
   TEXT commenting
   DATETIME created_at NOT NULL
   VARCHAR<191> email NOT NULL
   INTEGER email_count NOT NULL
   TINYINT email_disabled NOT NULL
   INTEGER email_open_rate
   INTEGER email_opened_count NOT NULL
   TINYINT enable_comment_notifications NOT NULL
   VARCHAR<191> expertise
   VARCHAR<2000> geolocation
   DATETIME last_commented_at
   DATETIME last_seen_at
   VARCHAR<191> name
   VARCHAR<2000> note
   VARCHAR<50> status NOT NULL
   VARCHAR<191> transient_id NOT NULL
   DATETIME updated_at
   VARCHAR<36> uuid NOT NULL
}
class comment_reports{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> comment_id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id
   DATETIME updated_at NOT NULL
}
class custom_theme_settings{
 *VARCHAR<24> id NOT NULL
   VARCHAR<191> key NOT NULL
   VARCHAR<191> theme NOT NULL
   VARCHAR<50> type NOT NULL
   TEXT value
}
class donation_payment_events{
 *VARCHAR<24> id NOT NULL
   INTEGER amount NOT NULL
   VARCHAR<24> attribution_id
   VARCHAR<50> attribution_type
   VARCHAR<2000> attribution_url
   DATETIME created_at NOT NULL
   VARCHAR<50> currency NOT NULL
   VARCHAR<255> donation_message
   VARCHAR<191> email NOT NULL
   VARCHAR<24> member_id
   VARCHAR<191> name
   VARCHAR<191> referrer_medium
   VARCHAR<191> referrer_source
   VARCHAR<2000> referrer_url
   VARCHAR<191> utm_campaign
   VARCHAR<191> utm_content
   VARCHAR<191> utm_medium
   VARCHAR<191> utm_source
   VARCHAR<191> utm_term
}
class email_batches{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> email_id NOT NULL
   LONGTEXT error_data
   VARCHAR<2000> error_message
   INTEGER error_status_code
   TINYINT fallback_sending_domain NOT NULL
   TEXT member_segment
   VARCHAR<255> provider_id
   VARCHAR<50> status NOT NULL
   DATETIME updated_at NOT NULL
}
class emails{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   INTEGER csd_email_count
   INTEGER delivered_count NOT NULL
   INTEGER email_count NOT NULL
   VARCHAR<2000> error
   LONGTEXT error_data
   INTEGER failed_count NOT NULL
   TINYINT feedback_enabled NOT NULL
   VARCHAR<2000> from
   LONGTEXT html
   VARCHAR<24> newsletter_id
   INTEGER opened_count NOT NULL
   LONGTEXT plaintext
   VARCHAR<24> post_id NOT NULL
   TEXT recipient_filter NOT NULL
   VARCHAR<2000> reply_to
   LONGTEXT source
   VARCHAR<50> source_type NOT NULL
   VARCHAR<50> status NOT NULL
   VARCHAR<300> subject
   DATETIME submitted_at NOT NULL
   TINYINT track_clicks NOT NULL
   TINYINT track_opens NOT NULL
   DATETIME updated_at
   VARCHAR<36> uuid NOT NULL
}
class email_recipient_failures{
 *VARCHAR<24> id NOT NULL
   INTEGER code NOT NULL
   VARCHAR<24> email_id NOT NULL
   VARCHAR<24> email_recipient_id NOT NULL
   VARCHAR<50> enhanced_code
   VARCHAR<255> event_id
   DATETIME failed_at NOT NULL
   VARCHAR<24> member_id
   VARCHAR<2000> message NOT NULL
   VARCHAR<50> severity NOT NULL
}
class email_recipients{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> batch_id NOT NULL
   DATETIME delivered_at
   VARCHAR<24> email_id NOT NULL
   DATETIME failed_at
   VARCHAR<191> member_email NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<191> member_name
   VARCHAR<36> member_uuid NOT NULL
   DATETIME opened_at
   DATETIME processed_at
}
class email_spam_complaint_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> email_address NOT NULL
   VARCHAR<24> email_id NOT NULL
   VARCHAR<24> member_id NOT NULL
}
class gifts{
 *VARCHAR<24> id NOT NULL
   INTEGER amount NOT NULL
   VARCHAR<191> buyer_email NOT NULL
   VARCHAR<24> buyer_member_id
   VARCHAR<50> cadence NOT NULL
   DATETIME consumed_at
   DATETIME consumes_at
   DATETIME consumes_soon_reminder_sent_at
   VARCHAR<50> currency NOT NULL
   INTEGER duration NOT NULL
   DATETIME expired_at
   DATETIME expires_at NOT NULL
   DATETIME purchased_at NOT NULL
   DATETIME redeemed_at
   VARCHAR<24> redeemer_member_id
   DATETIME refunded_at
   VARCHAR<50> status NOT NULL
   VARCHAR<255> stripe_checkout_session_id NOT NULL
   VARCHAR<255> stripe_payment_intent_id NOT NULL
   VARCHAR<24> tier_id NOT NULL
   VARCHAR<48> token NOT NULL
}
class products{
 *VARCHAR<24> id NOT NULL
   TINYINT active NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<50> currency
   VARCHAR<191> description
   INTEGER monthly_price
   VARCHAR<24> monthly_price_id
   VARCHAR<191> name NOT NULL
   VARCHAR<191> slug NOT NULL
   INTEGER trial_days NOT NULL
   VARCHAR<50> type NOT NULL
   DATETIME updated_at
   VARCHAR<50> visibility NOT NULL
   VARCHAR<2000> welcome_page_url
   INTEGER yearly_price
   VARCHAR<24> yearly_price_id
}
class integrations{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<2000> description
   VARCHAR<2000> icon_image
   VARCHAR<191> name NOT NULL
   VARCHAR<191> slug NOT NULL
   VARCHAR<50> type NOT NULL
   DATETIME updated_at
}
class invites{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> email NOT NULL
   BIGINT expires NOT NULL
   VARCHAR<24> role_id NOT NULL
   VARCHAR<50> status NOT NULL
   VARCHAR<191> token NOT NULL
   DATETIME updated_at
}
class jobs{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   DATETIME finished_at
   VARCHAR<2000> metadata
   VARCHAR<191> name NOT NULL
   INTEGER queue_entry
   DATETIME started_at
   VARCHAR<50> status NOT NULL
   DATETIME updated_at
}
class labels{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> name NOT NULL
   VARCHAR<191> slug NOT NULL
   DATETIME updated_at
}
class members_cancel_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<255> from_plan NOT NULL
   VARCHAR<24> member_id NOT NULL
}
class members_click_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> redirect_id NOT NULL
}
class redirects{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> from NOT NULL
   VARCHAR<24> post_id
   VARCHAR<2000> to NOT NULL
   DATETIME updated_at
}
class members_created_events{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> attribution_id
   VARCHAR<50> attribution_type
   VARCHAR<2000> attribution_url
   VARCHAR<24> batch_id
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<191> referrer_medium
   VARCHAR<191> referrer_source
   VARCHAR<2000> referrer_url
   VARCHAR<50> source NOT NULL
   VARCHAR<191> utm_campaign
   VARCHAR<191> utm_content
   VARCHAR<191> utm_medium
   VARCHAR<191> utm_source
   VARCHAR<191> utm_term
}
class members_email_change_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> from_email NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<191> to_email NOT NULL
}
class members_feedback{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> post_id NOT NULL
   INTEGER score NOT NULL
   DATETIME updated_at
}
class members_labels{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> label_id NOT NULL
   VARCHAR<24> member_id NOT NULL
   INTEGER sort_order NOT NULL
}
class members_login_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
}
class members_newsletters{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> newsletter_id NOT NULL
}
class members_paid_subscription_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> currency NOT NULL
   VARCHAR<255> from_plan
   VARCHAR<24> member_id NOT NULL
   INTEGER mrr_delta NOT NULL
   VARCHAR<50> source NOT NULL
   VARCHAR<24> subscription_id
   VARCHAR<255> to_plan
   VARCHAR<50> type
}
class members_payment_events{
 *VARCHAR<24> id NOT NULL
   INTEGER amount NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> currency NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<50> source NOT NULL
}
class members_product_events{
 *VARCHAR<24> id NOT NULL
   VARCHAR<50> action
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> product_id NOT NULL
}
class members_products{
 *VARCHAR<24> id NOT NULL
   DATETIME expiry_at
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> product_id NOT NULL
   INTEGER sort_order NOT NULL
}
class members_status_events{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> batch_id
   DATETIME created_at NOT NULL
   VARCHAR<50> from_status
   VARCHAR<24> member_id NOT NULL
   VARCHAR<50> to_status
}
class members_stripe_customers{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<255> customer_id NOT NULL
   VARCHAR<191> email
   VARCHAR<24> member_id NOT NULL
   VARCHAR<191> name
   DATETIME updated_at
}
class members_stripe_customers_subscriptions{
 *VARCHAR<24> id NOT NULL
   TINYINT cancel_at_period_end NOT NULL
   VARCHAR<500> cancellation_reason
   DATETIME created_at NOT NULL
   DATETIME current_period_end NOT NULL
   VARCHAR<255> customer_id NOT NULL
   VARCHAR<4> default_payment_card_last4
   DATETIME discount_end
   DATETIME discount_start
   VARCHAR<24> ghost_subscription_id
   INTEGER mrr NOT NULL
   VARCHAR<24> offer_id
   INTEGER plan_amount NOT NULL
   VARCHAR<191> plan_currency NOT NULL
   VARCHAR<255> plan_id NOT NULL
   VARCHAR<50> plan_interval NOT NULL
   VARCHAR<50> plan_nickname NOT NULL
   DATETIME start_date NOT NULL
   VARCHAR<50> status NOT NULL
   VARCHAR<255> stripe_price_id NOT NULL
   VARCHAR<255> subscription_id NOT NULL
   DATETIME trial_end_at
   DATETIME trial_start_at
   DATETIME updated_at
}
class offers{
 *VARCHAR<24> id NOT NULL
   TINYINT active NOT NULL
   VARCHAR<191> code NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<50> currency
   INTEGER discount_amount NOT NULL
   VARCHAR<50> discount_type NOT NULL
   VARCHAR<50> duration NOT NULL
   INTEGER duration_in_months
   VARCHAR<50> interval NOT NULL
   VARCHAR<191> name NOT NULL
   VARCHAR<2000> portal_description
   VARCHAR<191> portal_title
   VARCHAR<24> product_id
   VARCHAR<50> redemption_type NOT NULL
   VARCHAR<255> stripe_coupon_id
   DATETIME updated_at
}
class subscriptions{
 *VARCHAR<24> id NOT NULL
   INTEGER amount
   VARCHAR<50> cadence
   DATETIME created_at NOT NULL
   VARCHAR<50> currency
   DATETIME expires_at
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> offer_id
   VARCHAR<50> payment_provider
   VARCHAR<2000> payment_subscription_url
   VARCHAR<2000> payment_user_url
   VARCHAR<50> status NOT NULL
   VARCHAR<24> tier_id NOT NULL
   VARCHAR<50> type NOT NULL
   DATETIME updated_at
}
class members_subscribe_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> newsletter_id
   VARCHAR<50> source
   TINYINT subscribed NOT NULL
}
class members_subscription_created_events{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> attribution_id
   VARCHAR<50> attribution_type
   VARCHAR<2000> attribution_url
   VARCHAR<24> batch_id
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<191> referrer_medium
   VARCHAR<191> referrer_source
   VARCHAR<2000> referrer_url
   VARCHAR<24> subscription_id NOT NULL
   VARCHAR<191> utm_campaign
   VARCHAR<191> utm_content
   VARCHAR<191> utm_medium
   VARCHAR<191> utm_source
   VARCHAR<191> utm_term
}
class mentions{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   TINYINT deleted NOT NULL
   TEXT payload
   VARCHAR<24> resource_id
   VARCHAR<50> resource_type
   VARCHAR<2000> source NOT NULL
   VARCHAR<2000> source_author
   VARCHAR<2000> source_excerpt
   VARCHAR<2000> source_favicon
   VARCHAR<2000> source_featured_image
   VARCHAR<2000> source_site_title
   VARCHAR<2000> source_title
   VARCHAR<2000> target NOT NULL
   TINYINT verified NOT NULL
}
class migrations{
 *INTEGER id NOT NULL
   VARCHAR<255> currentVersion
   VARCHAR<120> name NOT NULL
   VARCHAR<70> version NOT NULL
}
class migrations_lock{
 *VARCHAR<191> lock_key NOT NULL
   DATETIME acquired_at
   TINYINT locked
   DATETIME released_at
}
class milestones{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> currency
   DATETIME email_sent_at
   VARCHAR<24> type NOT NULL
   INTEGER value NOT NULL
}
class mobiledoc_revisions{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   BIGINT created_at_ts NOT NULL
   LONGTEXT mobiledoc
   VARCHAR<24> post_id NOT NULL
}
class offer_redemptions{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> offer_id NOT NULL
   VARCHAR<24> subscription_id NOT NULL
}
class outbox{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<50> event_type NOT NULL
   DATETIME last_retry_at
   VARCHAR<2000> message
   TEXT payload NOT NULL
   INTEGER retry_count NOT NULL
   VARCHAR<50> status NOT NULL
   DATETIME updated_at
}
class permissions{
 *VARCHAR<24> id NOT NULL
   VARCHAR<50> action_type NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<50> name NOT NULL
   VARCHAR<24> object_id
   VARCHAR<50> object_type NOT NULL
   DATETIME updated_at
}
class permissions_roles{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> permission_id NOT NULL
   VARCHAR<24> role_id NOT NULL
}
class permissions_users{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> permission_id NOT NULL
   VARCHAR<24> user_id NOT NULL
}
class post_revisions{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> author_id
   DATETIME created_at NOT NULL
   BIGINT created_at_ts NOT NULL
   VARCHAR<2000> custom_excerpt
   VARCHAR<2000> feature_image
   VARCHAR<2000> feature_image_alt
   TEXT feature_image_caption
   LONGTEXT lexical
   VARCHAR<24> post_id NOT NULL
   VARCHAR<50> post_status
   VARCHAR<50> reason
   VARCHAR<2000> title
}
class users{
 *VARCHAR<24> id NOT NULL
   TEXT accessibility
   TEXT bio
   VARCHAR<191> bluesky
   TINYINT comment_notifications NOT NULL
   VARCHAR<2000> cover_image
   DATETIME created_at NOT NULL
   TINYINT donation_notifications NOT NULL
   VARCHAR<191> email NOT NULL
   VARCHAR<2000> facebook
   TINYINT free_member_signup_notification NOT NULL
   TINYINT gift_subscription_purchase_notification NOT NULL
   VARCHAR<191> instagram
   DATETIME last_seen
   VARCHAR<191> linkedin
   VARCHAR<6> locale
   TEXT location
   VARCHAR<191> mastodon
   TINYINT mention_notifications NOT NULL
   VARCHAR<2000> meta_description
   VARCHAR<2000> meta_title
   TINYINT milestone_notifications NOT NULL
   VARCHAR<191> name NOT NULL
   TINYINT paid_subscription_canceled_notification NOT NULL
   TINYINT paid_subscription_started_notification NOT NULL
   VARCHAR<60> password NOT NULL
   VARCHAR<2000> profile_image
   TINYINT recommendation_notifications NOT NULL
   VARCHAR<191> slug NOT NULL
   VARCHAR<50> status NOT NULL
   VARCHAR<191> threads
   VARCHAR<191> tiktok
   TEXT tour
   VARCHAR<2000> twitter
   DATETIME updated_at
   VARCHAR<50> visibility NOT NULL
   VARCHAR<2000> website
   VARCHAR<191> youtube
}
class posts_authors{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> author_id NOT NULL
   VARCHAR<24> post_id NOT NULL
   INTEGER sort_order NOT NULL
}
class posts_meta{
 *VARCHAR<24> id NOT NULL
   TINYINT email_only NOT NULL
   VARCHAR<300> email_subject
   VARCHAR<2000> feature_image_alt
   TEXT feature_image_caption
   TEXT frontmatter
   VARCHAR<2000> meta_description
   VARCHAR<2000> meta_title
   VARCHAR<500> og_description
   VARCHAR<2000> og_image
   VARCHAR<300> og_title
   VARCHAR<24> post_id NOT NULL
   VARCHAR<500> twitter_description
   VARCHAR<2000> twitter_image
   VARCHAR<300> twitter_title
}
class posts_products{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> post_id NOT NULL
   VARCHAR<24> product_id NOT NULL
   INTEGER sort_order NOT NULL
}
class posts_tags{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> post_id NOT NULL
   INTEGER sort_order NOT NULL
   VARCHAR<24> tag_id NOT NULL
}
class tags{
 *VARCHAR<24> id NOT NULL
   VARCHAR<50> accent_color
   VARCHAR<2000> canonical_url
   TEXT codeinjection_foot
   TEXT codeinjection_head
   DATETIME created_at NOT NULL
   TEXT description
   VARCHAR<2000> feature_image
   VARCHAR<2000> meta_description
   VARCHAR<2000> meta_title
   VARCHAR<191> name NOT NULL
   VARCHAR<500> og_description
   VARCHAR<2000> og_image
   VARCHAR<300> og_title
   VARCHAR<191> parent_id
   VARCHAR<191> slug NOT NULL
   VARCHAR<500> twitter_description
   VARCHAR<2000> twitter_image
   VARCHAR<300> twitter_title
   DATETIME updated_at
   VARCHAR<50> visibility NOT NULL
}
class products_benefits{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> benefit_id NOT NULL
   VARCHAR<24> product_id NOT NULL
   INTEGER sort_order NOT NULL
}
class recommendation_click_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id
   VARCHAR<24> recommendation_id NOT NULL
}
class recommendations{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<2000> description
   VARCHAR<2000> excerpt
   VARCHAR<2000> favicon
   VARCHAR<2000> featured_image
   TINYINT one_click_subscribe NOT NULL
   VARCHAR<2000> title NOT NULL
   DATETIME updated_at
   VARCHAR<2000> url NOT NULL
}
class recommendation_subscribe_events{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> member_id
   VARCHAR<24> recommendation_id NOT NULL
}
class roles{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<2000> description
   VARCHAR<50> name NOT NULL
   DATETIME updated_at
}
class roles_users{
 *VARCHAR<24> id NOT NULL
   VARCHAR<24> role_id NOT NULL
   VARCHAR<24> user_id NOT NULL
}
class sessions{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<2000> session_data NOT NULL
   VARCHAR<32> session_id NOT NULL
   DATETIME updated_at
   VARCHAR<24> user_id NOT NULL
}
class settings{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<50> flags
   VARCHAR<50> group NOT NULL
   VARCHAR<50> key NOT NULL
   VARCHAR<50> type NOT NULL
   DATETIME updated_at
   TEXT value
}
class snippets{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   LONGTEXT lexical
   LONGTEXT mobiledoc NOT NULL
   VARCHAR<191> name NOT NULL
   DATETIME updated_at
}
class stripe_prices{
 *VARCHAR<24> id NOT NULL
   TINYINT active NOT NULL
   INTEGER amount NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> currency NOT NULL
   VARCHAR<191> description
   VARCHAR<50> interval
   VARCHAR<255> nickname
   VARCHAR<255> stripe_price_id NOT NULL
   VARCHAR<255> stripe_product_id NOT NULL
   VARCHAR<50> type NOT NULL
   DATETIME updated_at
}
class stripe_products{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<24> product_id
   VARCHAR<255> stripe_product_id NOT NULL
   DATETIME updated_at
}
class suppressions{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<191> email NOT NULL
   VARCHAR<24> email_id
   VARCHAR<50> reason NOT NULL
}
class tokens{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<2000> data
   DATETIME first_used_at
   INTEGER otc_used_count NOT NULL
   VARCHAR<32> token NOT NULL
   DATETIME updated_at
   INTEGER used_count NOT NULL
   VARCHAR<36> uuid NOT NULL
}
class webhooks{
 *VARCHAR<24> id NOT NULL
   VARCHAR<50> api_version NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<50> event NOT NULL
   VARCHAR<24> integration_id NOT NULL
   DATETIME last_triggered_at
   VARCHAR<50> last_triggered_error
   VARCHAR<50> last_triggered_status
   VARCHAR<191> name
   VARCHAR<191> secret
   VARCHAR<2000> target_url NOT NULL
   DATETIME updated_at
}
class welcome_email_automation_runs{
 *VARCHAR<24> id NOT NULL
   DATETIME created_at NOT NULL
   VARCHAR<50> exit_reason
   VARCHAR<24> member_id NOT NULL
   VARCHAR<24> next_welcome_email_automated_email_id
   DATETIME ready_at
   INTEGER step_attempts NOT NULL
   DATETIME step_started_at
   DATETIME updated_at
   VARCHAR<24> welcome_email_automation_id NOT NULL
}
welcome_email_automated_emails "1" -- "0..n" automated_email_recipients
welcome_email_automated_emails "0..1" -- "0..n" welcome_email_automated_emails
welcome_email_automations "1" -- "0..n" welcome_email_automated_emails
email_design_settings "1" -- "0..n" welcome_email_automated_emails
collections "1" -- "0..n" collections_posts
posts "1" -- "0..n" collections_posts
newsletters "0..1" -- "0..n" posts
members "1" -- "0..n" comment_likes
comments "1" -- "0..n" comment_likes
posts "1" -- "0..n" comments
comments "0..1" -- "0..n" comments
members "0..1" -- "0..n" comments
comments "0..1" -- "0..n" comments
members "0..1" -- "0..n" comment_reports
comments "1" -- "0..n" comment_reports
members "0..1" -- "0..n" donation_payment_events
emails "1" -- "0..n" email_batches
newsletters "0..1" -- "0..n" emails
emails "1" -- "0..n" email_recipient_failures
email_recipients "1" -- "0..n" email_recipient_failures
emails "1" -- "0..n" email_recipients
email_batches "1" -- "0..n" email_recipients
emails "1" -- "0..n" email_spam_complaint_events
members "1" -- "0..n" email_spam_complaint_events
members "0..1" -- "0..n" gifts
members "0..1" -- "0..n" gifts
products "1" -- "0..n" gifts
members "1" -- "0..n" members_cancel_events
redirects "1" -- "0..n" members_click_events
members "1" -- "0..n" members_click_events
posts "0..1" -- "0..n" redirects
members "1" -- "0..n" members_created_events
members "1" -- "0..n" members_email_change_events
posts "1" -- "0..n" members_feedback
members "1" -- "0..n" members_feedback
members "1" -- "0..n" members_labels
labels "1" -- "0..n" members_labels
members "1" -- "0..n" members_login_events
newsletters "1" -- "0..n" members_newsletters
members "1" -- "0..n" members_newsletters
members "1" -- "0..n" members_paid_subscription_events
members "1" -- "0..n" members_payment_events
products "1" -- "0..n" members_product_events
members "1" -- "0..n" members_product_events
products "1" -- "0..n" members_products
members "1" -- "0..n" members_products
members "1" -- "0..n" members_status_events
members "1" -- "0..n" members_stripe_customers
members_stripe_customers "1" -- "0..n" members_stripe_customers_subscriptions
subscriptions "0..1" -- "0..n" members_stripe_customers_subscriptions
offers "0..1" -- "0..n" members_stripe_customers_subscriptions
products "0..1" -- "0..n" offers
offers "0..1" -- "0..n" subscriptions
members "1" -- "0..n" subscriptions
products "1" -- "0..n" subscriptions
newsletters "0..1" -- "0..n" members_subscribe_events
members "1" -- "0..n" members_subscribe_events
members "1" -- "0..n" members_subscription_created_events
members_stripe_customers_subscriptions "1" -- "0..n" members_subscription_created_events
members_stripe_customers_subscriptions "1" -- "0..n" offer_redemptions
offers "1" -- "0..n" offer_redemptions
members "1" -- "0..n" offer_redemptions
users "0..1" -- "0..n" post_revisions
posts "1" -- "0..n" posts_authors
users "1" -- "0..n" posts_authors
posts "1" -- "0..n" posts_meta
products "1" -- "0..n" posts_products
posts "1" -- "0..n" posts_products
posts "1" -- "0..n" posts_tags
tags "1" -- "0..n" posts_tags
products "1" -- "0..n" products_benefits
benefits "1" -- "0..n" products_benefits
recommendations "1" -- "0..n" recommendation_click_events
members "0..1" -- "0..n" recommendation_click_events
members "0..1" -- "0..n" recommendation_subscribe_events
recommendations "1" -- "0..n" recommendation_subscribe_events
stripe_products "1" -- "0..n" stripe_prices
products "0..1" -- "0..n" stripe_products
emails "0..1" -- "0..n" suppressions
integrations "1" -- "0..n" webhooks
welcome_email_automated_emails "0..1" -- "0..n" welcome_email_automation_runs
members "1" -- "0..n" welcome_email_automation_runs
welcome_email_automations "1" -- "0..n" welcome_email_automation_runs

-->
![](https://mermaid.ink/img/Y2xhc3NEaWFncmFtCmNsYXNzIGFjdGlvbnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gYWN0b3JfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gYWN0b3JfdHlwZSBOT1QgTlVMTAogICBURVhUIGNvbnRleHQKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBldmVudCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiByZXNvdXJjZV9pZAogICBWQVJDSEFSPDUwPiByZXNvdXJjZV90eXBlIE5PVCBOVUxMCn0KY2xhc3MgYXBpX2tleXN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBpbnRlZ3JhdGlvbl9pZAogICBEQVRFVElNRSBsYXN0X3NlZW5fYXQKICAgVkFSQ0hBUjw1MD4gbGFzdF9zZWVuX3ZlcnNpb24KICAgVkFSQ0hBUjwyND4gcm9sZV9pZAogICBWQVJDSEFSPDE5MT4gc2VjcmV0IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IHR5cGUgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAogICBWQVJDSEFSPDI0PiB1c2VyX2lkCn0KY2xhc3MgYXV0b21hdGVkX2VtYWlsX3JlY2lwaWVudHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gYXV0b21hdGVkX2VtYWlsX2lkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IG1lbWJlcl9lbWFpbCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IG1lbWJlcl9uYW1lCiAgIFZBUkNIQVI8MzY-IG1lbWJlcl91dWlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKfQpjbGFzcyB3ZWxjb21lX2VtYWlsX2F1dG9tYXRlZF9lbWFpbHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBJTlRFR0VSIGRlbGF5X2RheXMgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gZW1haWxfZGVzaWduX3NldHRpbmdfaWQgTk9UIE5VTEwKICAgTE9OR1RFWFQgbGV4aWNhbAogICBWQVJDSEFSPDI0PiBuZXh0X3dlbGNvbWVfZW1haWxfYXV0b21hdGVkX2VtYWlsX2lkCiAgIFZBUkNIQVI8MTkxPiBzZW5kZXJfZW1haWwKICAgVkFSQ0hBUjwxOTE-IHNlbmRlcl9uYW1lCiAgIFZBUkNIQVI8MTkxPiBzZW5kZXJfcmVwbHlfdG8KICAgVkFSQ0hBUjwzMDA-IHN1YmplY3QgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAogICBWQVJDSEFSPDI0PiB3ZWxjb21lX2VtYWlsX2F1dG9tYXRpb25faWQgTk9UIE5VTEwKfQpjbGFzcyB3ZWxjb21lX2VtYWlsX2F1dG9tYXRpb25zewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHNsdWcgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKfQpjbGFzcyBlbWFpbF9kZXNpZ25fc2V0dGluZ3N7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gYmFja2dyb3VuZF9jb2xvciBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gYm9keV9mb250X2NhdGVnb3J5IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IGJ1dHRvbl9jb2xvcgogICBWQVJDSEFSPDUwPiBidXR0b25fY29ybmVycyBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBidXR0b25fc3R5bGUgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBkaXZpZGVyX2NvbG9yCiAgIFRFWFQgZm9vdGVyX2NvbnRlbnQKICAgVkFSQ0hBUjw1MD4gaGVhZGVyX2JhY2tncm91bmRfY29sb3IgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBoZWFkZXJfaW1hZ2UKICAgVkFSQ0hBUjw1MD4gaW1hZ2VfY29ybmVycyBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBsaW5rX2NvbG9yCiAgIFZBUkNIQVI8NTA-IGxpbmtfc3R5bGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc2VjdGlvbl90aXRsZV9jb2xvcgogICBUSU5ZSU5UIHNob3dfYmFkZ2UgTk9UIE5VTEwKICAgVElOWUlOVCBzaG93X2hlYWRlcl9pY29uIE5PVCBOVUxMCiAgIFRJTllJTlQgc2hvd19oZWFkZXJfdGl0bGUgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHNsdWcgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHRpdGxlX2ZvbnRfY2F0ZWdvcnkgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gdGl0bGVfZm9udF93ZWlnaHQgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAp9CmNsYXNzIGJlbmVmaXRzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHNsdWcgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAp9CmNsYXNzIGJydXRlewogKlZBUkNIQVI8MTkxPiBrZXkgTk9UIE5VTEwKICAgSU5URUdFUiBjb3VudCBOT1QgTlVMTAogICBCSUdJTlQgZmlyc3RSZXF1ZXN0IE5PVCBOVUxMCiAgIEJJR0lOVCBsYXN0UmVxdWVzdCBOT1QgTlVMTAogICBCSUdJTlQgbGlmZXRpbWUgTk9UIE5VTEwKfQpjbGFzcyBjb2xsZWN0aW9uc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gZGVzY3JpcHRpb24KICAgVkFSQ0hBUjwyMDAwPiBmZWF0dXJlX2ltYWdlCiAgIFRFWFQgZmlsdGVyCiAgIFZBUkNIQVI8MTkxPiBzbHVnIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiB0aXRsZSBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiB0eXBlIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKfQpjbGFzcyBjb2xsZWN0aW9uc19wb3N0c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBjb2xsZWN0aW9uX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IHBvc3RfaWQgTk9UIE5VTEwKICAgSU5URUdFUiBzb3J0X29yZGVyIE5PVCBOVUxMCn0KY2xhc3MgcG9zdHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVEVYVCBjYW5vbmljYWxfdXJsCiAgIFRFWFQgY29kZWluamVjdGlvbl9mb290CiAgIFRFWFQgY29kZWluamVjdGlvbl9oZWFkCiAgIFZBUkNIQVI8NTA-IGNvbW1lbnRfaWQKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDIwMDA-IGN1c3RvbV9leGNlcnB0CiAgIFZBUkNIQVI8MTAwPiBjdXN0b21fdGVtcGxhdGUKICAgVEVYVCBlbWFpbF9yZWNpcGllbnRfZmlsdGVyIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gZmVhdHVyZV9pbWFnZQogICBUSU5ZSU5UIGZlYXR1cmVkIE5PVCBOVUxMCiAgIExPTkdURVhUIGh0bWwKICAgTE9OR1RFWFQgbGV4aWNhbAogICBWQVJDSEFSPDY-IGxvY2FsZQogICBMT05HVEVYVCBtb2JpbGVkb2MKICAgVkFSQ0hBUjwyND4gbmV3c2xldHRlcl9pZAogICBMT05HVEVYVCBwbGFpbnRleHQKICAgREFURVRJTUUgcHVibGlzaGVkX2F0CiAgIFZBUkNIQVI8MjQ-IHB1Ymxpc2hlZF9ieQogICBUSU5ZSU5UIHNob3dfdGl0bGVfYW5kX2ZlYXR1cmVfaW1hZ2UgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHNsdWcgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gdGl0bGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gdHlwZSBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0CiAgIFZBUkNIQVI8MzY-IHV1aWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gdmlzaWJpbGl0eSBOT1QgTlVMTAp9CmNsYXNzIG5ld3NsZXR0ZXJzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IGJhY2tncm91bmRfY29sb3IgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IGJvZHlfZm9udF9jYXRlZ29yeSBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBidXR0b25fY29sb3IKICAgVkFSQ0hBUjw1MD4gYnV0dG9uX2Nvcm5lcnMgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gYnV0dG9uX3N0eWxlIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBkZXNjcmlwdGlvbgogICBWQVJDSEFSPDUwPiBkaXZpZGVyX2NvbG9yCiAgIFRJTllJTlQgZmVlZGJhY2tfZW5hYmxlZCBOT1QgTlVMTAogICBURVhUIGZvb3Rlcl9jb250ZW50CiAgIFZBUkNIQVI8NTA-IGhlYWRlcl9iYWNrZ3JvdW5kX2NvbG9yIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gaGVhZGVyX2ltYWdlCiAgIFZBUkNIQVI8NTA-IGltYWdlX2Nvcm5lcnMgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gbGlua19jb2xvcgogICBWQVJDSEFSPDUwPiBsaW5rX3N0eWxlIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiBuYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IHBvc3RfdGl0bGVfY29sb3IKICAgVkFSQ0hBUjw1MD4gc2VjdGlvbl90aXRsZV9jb2xvcgogICBWQVJDSEFSPDE5MT4gc2VuZGVyX2VtYWlsCiAgIFZBUkNIQVI8MTkxPiBzZW5kZXJfbmFtZQogICBWQVJDSEFSPDE5MT4gc2VuZGVyX3JlcGx5X3RvIE5PVCBOVUxMCiAgIFRJTllJTlQgc2hvd19iYWRnZSBOT1QgTlVMTAogICBUSU5ZSU5UIHNob3dfY29tbWVudF9jdGEgTk9UIE5VTEwKICAgVElOWUlOVCBzaG93X2V4Y2VycHQgTk9UIE5VTEwKICAgVElOWUlOVCBzaG93X2ZlYXR1cmVfaW1hZ2UgTk9UIE5VTEwKICAgVElOWUlOVCBzaG93X2hlYWRlcl9pY29uIE5PVCBOVUxMCiAgIFRJTllJTlQgc2hvd19oZWFkZXJfbmFtZSBOT1QgTlVMTAogICBUSU5ZSU5UIHNob3dfaGVhZGVyX3RpdGxlIE5PVCBOVUxMCiAgIFRJTllJTlQgc2hvd19sYXRlc3RfcG9zdHMgTk9UIE5VTEwKICAgVElOWUlOVCBzaG93X3Bvc3RfdGl0bGVfc2VjdGlvbiBOT1QgTlVMTAogICBUSU5ZSU5UIHNob3dfc2hhcmVfYnV0dG9uIE5PVCBOVUxMCiAgIFRJTllJTlQgc2hvd19zdWJzY3JpcHRpb25fZGV0YWlscyBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gc2x1ZyBOT1QgTlVMTAogICBJTlRFR0VSIHNvcnRfb3JkZXIgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIFRJTllJTlQgc3Vic2NyaWJlX29uX3NpZ251cCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gdGl0bGVfYWxpZ25tZW50IE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiB0aXRsZV9mb250X2NhdGVnb3J5IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IHRpdGxlX2ZvbnRfd2VpZ2h0IE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKICAgVkFSQ0hBUjwzNj4gdXVpZCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiB2aXNpYmlsaXR5IE5PVCBOVUxMCn0KY2xhc3MgY29tbWVudF9saWtlc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBjb21tZW50X2lkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gbWVtYmVyX2lkIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQgTk9UIE5VTEwKfQpjbGFzcyBjb21tZW50c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIERBVEVUSU1FIGVkaXRlZF9hdAogICBMT05HVEVYVCBodG1sCiAgIFZBUkNIQVI8MjQ-IGluX3JlcGx5X3RvX2lkCiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZAogICBWQVJDSEFSPDI0PiBwYXJlbnRfaWQKICAgVkFSQ0hBUjwyND4gcG9zdF9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBzdGF0dXMgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdCBOT1QgTlVMTAp9CmNsYXNzIG1lbWJlcnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVEVYVCBjb21tZW50aW5nCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IGVtYWlsIE5PVCBOVUxMCiAgIElOVEVHRVIgZW1haWxfY291bnQgTk9UIE5VTEwKICAgVElOWUlOVCBlbWFpbF9kaXNhYmxlZCBOT1QgTlVMTAogICBJTlRFR0VSIGVtYWlsX29wZW5fcmF0ZQogICBJTlRFR0VSIGVtYWlsX29wZW5lZF9jb3VudCBOT1QgTlVMTAogICBUSU5ZSU5UIGVuYWJsZV9jb21tZW50X25vdGlmaWNhdGlvbnMgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IGV4cGVydGlzZQogICBWQVJDSEFSPDIwMDA-IGdlb2xvY2F0aW9uCiAgIERBVEVUSU1FIGxhc3RfY29tbWVudGVkX2F0CiAgIERBVEVUSU1FIGxhc3Rfc2Vlbl9hdAogICBWQVJDSEFSPDE5MT4gbmFtZQogICBWQVJDSEFSPDIwMDA-IG5vdGUKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiB0cmFuc2llbnRfaWQgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAogICBWQVJDSEFSPDM2PiB1dWlkIE5PVCBOVUxMCn0KY2xhc3MgY29tbWVudF9yZXBvcnRzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IGNvbW1lbnRfaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQKICAgREFURVRJTUUgdXBkYXRlZF9hdCBOT1QgTlVMTAp9CmNsYXNzIGN1c3RvbV90aGVtZV9zZXR0aW5nc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4ga2V5IE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiB0aGVtZSBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiB0eXBlIE5PVCBOVUxMCiAgIFRFWFQgdmFsdWUKfQpjbGFzcyBkb25hdGlvbl9wYXltZW50X2V2ZW50c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBJTlRFR0VSIGFtb3VudCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBhdHRyaWJ1dGlvbl9pZAogICBWQVJDSEFSPDUwPiBhdHRyaWJ1dGlvbl90eXBlCiAgIFZBUkNIQVI8MjAwMD4gYXR0cmlidXRpb25fdXJsCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gY3VycmVuY3kgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGRvbmF0aW9uX21lc3NhZ2UKICAgVkFSQ0hBUjwxOTE-IGVtYWlsIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZAogICBWQVJDSEFSPDE5MT4gbmFtZQogICBWQVJDSEFSPDE5MT4gcmVmZXJyZXJfbWVkaXVtCiAgIFZBUkNIQVI8MTkxPiByZWZlcnJlcl9zb3VyY2UKICAgVkFSQ0hBUjwyMDAwPiByZWZlcnJlcl91cmwKICAgVkFSQ0hBUjwxOTE-IHV0bV9jYW1wYWlnbgogICBWQVJDSEFSPDE5MT4gdXRtX2NvbnRlbnQKICAgVkFSQ0hBUjwxOTE-IHV0bV9tZWRpdW0KICAgVkFSQ0hBUjwxOTE-IHV0bV9zb3VyY2UKICAgVkFSQ0hBUjwxOTE-IHV0bV90ZXJtCn0KY2xhc3MgZW1haWxfYmF0Y2hlc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IGVtYWlsX2lkIE5PVCBOVUxMCiAgIExPTkdURVhUIGVycm9yX2RhdGEKICAgVkFSQ0hBUjwyMDAwPiBlcnJvcl9tZXNzYWdlCiAgIElOVEVHRVIgZXJyb3Jfc3RhdHVzX2NvZGUKICAgVElOWUlOVCBmYWxsYmFja19zZW5kaW5nX2RvbWFpbiBOT1QgTlVMTAogICBURVhUIG1lbWJlcl9zZWdtZW50CiAgIFZBUkNIQVI8MjU1PiBwcm92aWRlcl9pZAogICBWQVJDSEFSPDUwPiBzdGF0dXMgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdCBOT1QgTlVMTAp9CmNsYXNzIGVtYWlsc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIElOVEVHRVIgY3NkX2VtYWlsX2NvdW50CiAgIElOVEVHRVIgZGVsaXZlcmVkX2NvdW50IE5PVCBOVUxMCiAgIElOVEVHRVIgZW1haWxfY291bnQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBlcnJvcgogICBMT05HVEVYVCBlcnJvcl9kYXRhCiAgIElOVEVHRVIgZmFpbGVkX2NvdW50IE5PVCBOVUxMCiAgIFRJTllJTlQgZmVlZGJhY2tfZW5hYmxlZCBOT1QgTlVMTAogICBWQVJDSEFSPDIwMDA-IGZyb20KICAgTE9OR1RFWFQgaHRtbAogICBWQVJDSEFSPDI0PiBuZXdzbGV0dGVyX2lkCiAgIElOVEVHRVIgb3BlbmVkX2NvdW50IE5PVCBOVUxMCiAgIExPTkdURVhUIHBsYWludGV4dAogICBWQVJDSEFSPDI0PiBwb3N0X2lkIE5PVCBOVUxMCiAgIFRFWFQgcmVjaXBpZW50X2ZpbHRlciBOT1QgTlVMTAogICBWQVJDSEFSPDIwMDA-IHJlcGx5X3RvCiAgIExPTkdURVhUIHNvdXJjZQogICBWQVJDSEFSPDUwPiBzb3VyY2VfdHlwZSBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBzdGF0dXMgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMDA-IHN1YmplY3QKICAgREFURVRJTUUgc3VibWl0dGVkX2F0IE5PVCBOVUxMCiAgIFRJTllJTlQgdHJhY2tfY2xpY2tzIE5PVCBOVUxMCiAgIFRJTllJTlQgdHJhY2tfb3BlbnMgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAogICBWQVJDSEFSPDM2PiB1dWlkIE5PVCBOVUxMCn0KY2xhc3MgZW1haWxfcmVjaXBpZW50X2ZhaWx1cmVzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIElOVEVHRVIgY29kZSBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBlbWFpbF9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBlbWFpbF9yZWNpcGllbnRfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gZW5oYW5jZWRfY29kZQogICBWQVJDSEFSPDI1NT4gZXZlbnRfaWQKICAgREFURVRJTUUgZmFpbGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZAogICBWQVJDSEFSPDIwMDA-IG1lc3NhZ2UgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc2V2ZXJpdHkgTk9UIE5VTEwKfQpjbGFzcyBlbWFpbF9yZWNpcGllbnRzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IGJhdGNoX2lkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGRlbGl2ZXJlZF9hdAogICBWQVJDSEFSPDI0PiBlbWFpbF9pZCBOT1QgTlVMTAogICBEQVRFVElNRSBmYWlsZWRfYXQKICAgVkFSQ0hBUjwxOTE-IG1lbWJlcl9lbWFpbCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IG1lbWJlcl9uYW1lCiAgIFZBUkNIQVI8MzY-IG1lbWJlcl91dWlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIG9wZW5lZF9hdAogICBEQVRFVElNRSBwcm9jZXNzZWRfYXQKfQpjbGFzcyBlbWFpbF9zcGFtX2NvbXBsYWludF9ldmVudHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gZW1haWxfYWRkcmVzcyBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBlbWFpbF9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKfQpjbGFzcyBnaWZ0c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBJTlRFR0VSIGFtb3VudCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gYnV5ZXJfZW1haWwgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gYnV5ZXJfbWVtYmVyX2lkCiAgIFZBUkNIQVI8NTA-IGNhZGVuY2UgTk9UIE5VTEwKICAgREFURVRJTUUgY29uc3VtZWRfYXQKICAgREFURVRJTUUgY29uc3VtZXNfYXQKICAgREFURVRJTUUgY29uc3VtZXNfc29vbl9yZW1pbmRlcl9zZW50X2F0CiAgIFZBUkNIQVI8NTA-IGN1cnJlbmN5IE5PVCBOVUxMCiAgIElOVEVHRVIgZHVyYXRpb24gTk9UIE5VTEwKICAgREFURVRJTUUgZXhwaXJlZF9hdAogICBEQVRFVElNRSBleHBpcmVzX2F0IE5PVCBOVUxMCiAgIERBVEVUSU1FIHB1cmNoYXNlZF9hdCBOT1QgTlVMTAogICBEQVRFVElNRSByZWRlZW1lZF9hdAogICBWQVJDSEFSPDI0PiByZWRlZW1lcl9tZW1iZXJfaWQKICAgREFURVRJTUUgcmVmdW5kZWRfYXQKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBzdHJpcGVfY2hlY2tvdXRfc2Vzc2lvbl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gc3RyaXBlX3BheW1lbnRfaW50ZW50X2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IHRpZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw0OD4gdG9rZW4gTk9UIE5VTEwKfQpjbGFzcyBwcm9kdWN0c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBUSU5ZSU5UIGFjdGl2ZSBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IGN1cnJlbmN5CiAgIFZBUkNIQVI8MTkxPiBkZXNjcmlwdGlvbgogICBJTlRFR0VSIG1vbnRobHlfcHJpY2UKICAgVkFSQ0hBUjwyND4gbW9udGhseV9wcmljZV9pZAogICBWQVJDSEFSPDE5MT4gbmFtZSBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gc2x1ZyBOT1QgTlVMTAogICBJTlRFR0VSIHRyaWFsX2RheXMgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gdHlwZSBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0CiAgIFZBUkNIQVI8NTA-IHZpc2liaWxpdHkgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiB3ZWxjb21lX3BhZ2VfdXJsCiAgIElOVEVHRVIgeWVhcmx5X3ByaWNlCiAgIFZBUkNIQVI8MjQ-IHllYXJseV9wcmljZV9pZAp9CmNsYXNzIGludGVncmF0aW9uc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gZGVzY3JpcHRpb24KICAgVkFSQ0hBUjwyMDAwPiBpY29uX2ltYWdlCiAgIFZBUkNIQVI8MTkxPiBuYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiBzbHVnIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IHR5cGUgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAp9CmNsYXNzIGludml0ZXN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gZW1haWwgTk9UIE5VTEwKICAgQklHSU5UIGV4cGlyZXMgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gcm9sZV9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBzdGF0dXMgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHRva2VuIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKfQpjbGFzcyBqb2JzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgREFURVRJTUUgZmluaXNoZWRfYXQKICAgVkFSQ0hBUjwyMDAwPiBtZXRhZGF0YQogICBWQVJDSEFSPDE5MT4gbmFtZSBOT1QgTlVMTAogICBJTlRFR0VSIHF1ZXVlX2VudHJ5CiAgIERBVEVUSU1FIHN0YXJ0ZWRfYXQKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKfQpjbGFzcyBsYWJlbHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gbmFtZSBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gc2x1ZyBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3MgbWVtYmVyc19jYW5jZWxfZXZlbnRzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGZyb21fcGxhbiBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKfQpjbGFzcyBtZW1iZXJzX2NsaWNrX2V2ZW50c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiByZWRpcmVjdF9pZCBOT1QgTlVMTAp9CmNsYXNzIHJlZGlyZWN0c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiBmcm9tIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IHBvc3RfaWQKICAgVkFSQ0hBUjwyMDAwPiB0byBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3MgbWVtYmVyc19jcmVhdGVkX2V2ZW50c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBhdHRyaWJ1dGlvbl9pZAogICBWQVJDSEFSPDUwPiBhdHRyaWJ1dGlvbl90eXBlCiAgIFZBUkNIQVI8MjAwMD4gYXR0cmlidXRpb25fdXJsCiAgIFZBUkNIQVI8MjQ-IGJhdGNoX2lkCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gbWVtYmVyX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiByZWZlcnJlcl9tZWRpdW0KICAgVkFSQ0hBUjwxOTE-IHJlZmVycmVyX3NvdXJjZQogICBWQVJDSEFSPDIwMDA-IHJlZmVycmVyX3VybAogICBWQVJDSEFSPDUwPiBzb3VyY2UgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHV0bV9jYW1wYWlnbgogICBWQVJDSEFSPDE5MT4gdXRtX2NvbnRlbnQKICAgVkFSQ0hBUjwxOTE-IHV0bV9tZWRpdW0KICAgVkFSQ0hBUjwxOTE-IHV0bV9zb3VyY2UKICAgVkFSQ0hBUjwxOTE-IHV0bV90ZXJtCn0KY2xhc3MgbWVtYmVyc19lbWFpbF9jaGFuZ2VfZXZlbnRzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IGZyb21fZW1haWwgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gbWVtYmVyX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiB0b19lbWFpbCBOT1QgTlVMTAp9CmNsYXNzIG1lbWJlcnNfZmVlZGJhY2t7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gcG9zdF9pZCBOT1QgTlVMTAogICBJTlRFR0VSIHNjb3JlIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKfQpjbGFzcyBtZW1iZXJzX2xhYmVsc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBsYWJlbF9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgSU5URUdFUiBzb3J0X29yZGVyIE5PVCBOVUxMCn0KY2xhc3MgbWVtYmVyc19sb2dpbl9ldmVudHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKfQpjbGFzcyBtZW1iZXJzX25ld3NsZXR0ZXJzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBuZXdzbGV0dGVyX2lkIE5PVCBOVUxMCn0KY2xhc3MgbWVtYmVyc19wYWlkX3N1YnNjcmlwdGlvbl9ldmVudHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gY3VycmVuY3kgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGZyb21fcGxhbgogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgSU5URUdFUiBtcnJfZGVsdGEgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc291cmNlIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IHN1YnNjcmlwdGlvbl9pZAogICBWQVJDSEFSPDI1NT4gdG9fcGxhbgogICBWQVJDSEFSPDUwPiB0eXBlCn0KY2xhc3MgbWVtYmVyc19wYXltZW50X2V2ZW50c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBJTlRFR0VSIGFtb3VudCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiBjdXJyZW5jeSBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc291cmNlIE5PVCBOVUxMCn0KY2xhc3MgbWVtYmVyc19wcm9kdWN0X2V2ZW50c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBhY3Rpb24KICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gcHJvZHVjdF9pZCBOT1QgTlVMTAp9CmNsYXNzIG1lbWJlcnNfcHJvZHVjdHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgZXhwaXJ5X2F0CiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBwcm9kdWN0X2lkIE5PVCBOVUxMCiAgIElOVEVHRVIgc29ydF9vcmRlciBOT1QgTlVMTAp9CmNsYXNzIG1lbWJlcnNfc3RhdHVzX2V2ZW50c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBiYXRjaF9pZAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IGZyb21fc3RhdHVzCiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiB0b19zdGF0dXMKfQpjbGFzcyBtZW1iZXJzX3N0cmlwZV9jdXN0b21lcnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gY3VzdG9tZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IGVtYWlsCiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gbmFtZQogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3MgbWVtYmVyc19zdHJpcGVfY3VzdG9tZXJzX3N1YnNjcmlwdGlvbnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVElOWUlOVCBjYW5jZWxfYXRfcGVyaW9kX2VuZCBOT1QgTlVMTAogICBWQVJDSEFSPDUwMD4gY2FuY2VsbGF0aW9uX3JlYXNvbgogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIERBVEVUSU1FIGN1cnJlbnRfcGVyaW9kX2VuZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gY3VzdG9tZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw0PiBkZWZhdWx0X3BheW1lbnRfY2FyZF9sYXN0NAogICBEQVRFVElNRSBkaXNjb3VudF9lbmQKICAgREFURVRJTUUgZGlzY291bnRfc3RhcnQKICAgVkFSQ0hBUjwyND4gZ2hvc3Rfc3Vic2NyaXB0aW9uX2lkCiAgIElOVEVHRVIgbXJyIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG9mZmVyX2lkCiAgIElOVEVHRVIgcGxhbl9hbW91bnQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHBsYW5fY3VycmVuY3kgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHBsYW5faWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gcGxhbl9pbnRlcnZhbCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBwbGFuX25pY2tuYW1lIE5PVCBOVUxMCiAgIERBVEVUSU1FIHN0YXJ0X2RhdGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBzdHJpcGVfcHJpY2VfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHN1YnNjcmlwdGlvbl9pZCBOT1QgTlVMTAogICBEQVRFVElNRSB0cmlhbF9lbmRfYXQKICAgREFURVRJTUUgdHJpYWxfc3RhcnRfYXQKICAgREFURVRJTUUgdXBkYXRlZF9hdAp9CmNsYXNzIG9mZmVyc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBUSU5ZSU5UIGFjdGl2ZSBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gY29kZSBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IGN1cnJlbmN5CiAgIElOVEVHRVIgZGlzY291bnRfYW1vdW50IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IGRpc2NvdW50X3R5cGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gZHVyYXRpb24gTk9UIE5VTEwKICAgSU5URUdFUiBkdXJhdGlvbl9pbl9tb250aHMKICAgVkFSQ0hBUjw1MD4gaW50ZXJ2YWwgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBwb3J0YWxfZGVzY3JpcHRpb24KICAgVkFSQ0hBUjwxOTE-IHBvcnRhbF90aXRsZQogICBWQVJDSEFSPDI0PiBwcm9kdWN0X2lkCiAgIFZBUkNIQVI8NTA-IHJlZGVtcHRpb25fdHlwZSBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gc3RyaXBlX2NvdXBvbl9pZAogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3Mgc3Vic2NyaXB0aW9uc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBJTlRFR0VSIGFtb3VudAogICBWQVJDSEFSPDUwPiBjYWRlbmNlCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gY3VycmVuY3kKICAgREFURVRJTUUgZXhwaXJlc19hdAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gb2ZmZXJfaWQKICAgVkFSQ0hBUjw1MD4gcGF5bWVudF9wcm92aWRlcgogICBWQVJDSEFSPDIwMDA-IHBheW1lbnRfc3Vic2NyaXB0aW9uX3VybAogICBWQVJDSEFSPDIwMDA-IHBheW1lbnRfdXNlcl91cmwKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IHRpZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gdHlwZSBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3MgbWVtYmVyc19zdWJzY3JpYmVfZXZlbnRzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gbWVtYmVyX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG5ld3NsZXR0ZXJfaWQKICAgVkFSQ0hBUjw1MD4gc291cmNlCiAgIFRJTllJTlQgc3Vic2NyaWJlZCBOT1QgTlVMTAp9CmNsYXNzIG1lbWJlcnNfc3Vic2NyaXB0aW9uX2NyZWF0ZWRfZXZlbnRzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IGF0dHJpYnV0aW9uX2lkCiAgIFZBUkNIQVI8NTA-IGF0dHJpYnV0aW9uX3R5cGUKICAgVkFSQ0hBUjwyMDAwPiBhdHRyaWJ1dGlvbl91cmwKICAgVkFSQ0hBUjwyND4gYmF0Y2hfaWQKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHJlZmVycmVyX21lZGl1bQogICBWQVJDSEFSPDE5MT4gcmVmZXJyZXJfc291cmNlCiAgIFZBUkNIQVI8MjAwMD4gcmVmZXJyZXJfdXJsCiAgIFZBUkNIQVI8MjQ-IHN1YnNjcmlwdGlvbl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gdXRtX2NhbXBhaWduCiAgIFZBUkNIQVI8MTkxPiB1dG1fY29udGVudAogICBWQVJDSEFSPDE5MT4gdXRtX21lZGl1bQogICBWQVJDSEFSPDE5MT4gdXRtX3NvdXJjZQogICBWQVJDSEFSPDE5MT4gdXRtX3Rlcm0KfQpjbGFzcyBtZW50aW9uc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFRJTllJTlQgZGVsZXRlZCBOT1QgTlVMTAogICBURVhUIHBheWxvYWQKICAgVkFSQ0hBUjwyND4gcmVzb3VyY2VfaWQKICAgVkFSQ0hBUjw1MD4gcmVzb3VyY2VfdHlwZQogICBWQVJDSEFSPDIwMDA-IHNvdXJjZSBOT1QgTlVMTAogICBWQVJDSEFSPDIwMDA-IHNvdXJjZV9hdXRob3IKICAgVkFSQ0hBUjwyMDAwPiBzb3VyY2VfZXhjZXJwdAogICBWQVJDSEFSPDIwMDA-IHNvdXJjZV9mYXZpY29uCiAgIFZBUkNIQVI8MjAwMD4gc291cmNlX2ZlYXR1cmVkX2ltYWdlCiAgIFZBUkNIQVI8MjAwMD4gc291cmNlX3NpdGVfdGl0bGUKICAgVkFSQ0hBUjwyMDAwPiBzb3VyY2VfdGl0bGUKICAgVkFSQ0hBUjwyMDAwPiB0YXJnZXQgTk9UIE5VTEwKICAgVElOWUlOVCB2ZXJpZmllZCBOT1QgTlVMTAp9CmNsYXNzIG1pZ3JhdGlvbnN7CiAqSU5URUdFUiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gY3VycmVudFZlcnNpb24KICAgVkFSQ0hBUjwxMjA-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjw3MD4gdmVyc2lvbiBOT1QgTlVMTAp9CmNsYXNzIG1pZ3JhdGlvbnNfbG9ja3sKICpWQVJDSEFSPDE5MT4gbG9ja19rZXkgTk9UIE5VTEwKICAgREFURVRJTUUgYWNxdWlyZWRfYXQKICAgVElOWUlOVCBsb2NrZWQKICAgREFURVRJTUUgcmVsZWFzZWRfYXQKfQpjbGFzcyBtaWxlc3RvbmVzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gY3VycmVuY3kKICAgREFURVRJTUUgZW1haWxfc2VudF9hdAogICBWQVJDSEFSPDI0PiB0eXBlIE5PVCBOVUxMCiAgIElOVEVHRVIgdmFsdWUgTk9UIE5VTEwKfQpjbGFzcyBtb2JpbGVkb2NfcmV2aXNpb25zewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgQklHSU5UIGNyZWF0ZWRfYXRfdHMgTk9UIE5VTEwKICAgTE9OR1RFWFQgbW9iaWxlZG9jCiAgIFZBUkNIQVI8MjQ-IHBvc3RfaWQgTk9UIE5VTEwKfQpjbGFzcyBvZmZlcl9yZWRlbXB0aW9uc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG1lbWJlcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBvZmZlcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBzdWJzY3JpcHRpb25faWQgTk9UIE5VTEwKfQpjbGFzcyBvdXRib3h7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBldmVudF90eXBlIE5PVCBOVUxMCiAgIERBVEVUSU1FIGxhc3RfcmV0cnlfYXQKICAgVkFSQ0hBUjwyMDAwPiBtZXNzYWdlCiAgIFRFWFQgcGF5bG9hZCBOT1QgTlVMTAogICBJTlRFR0VSIHJldHJ5X2NvdW50IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IHN0YXR1cyBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3MgcGVybWlzc2lvbnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gYWN0aW9uX3R5cGUgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBuYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG9iamVjdF9pZAogICBWQVJDSEFSPDUwPiBvYmplY3RfdHlwZSBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3MgcGVybWlzc2lvbnNfcm9sZXN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gcGVybWlzc2lvbl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiByb2xlX2lkIE5PVCBOVUxMCn0KY2xhc3MgcGVybWlzc2lvbnNfdXNlcnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gcGVybWlzc2lvbl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiB1c2VyX2lkIE5PVCBOVUxMCn0KY2xhc3MgcG9zdF9yZXZpc2lvbnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gYXV0aG9yX2lkCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgQklHSU5UIGNyZWF0ZWRfYXRfdHMgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBjdXN0b21fZXhjZXJwdAogICBWQVJDSEFSPDIwMDA-IGZlYXR1cmVfaW1hZ2UKICAgVkFSQ0hBUjwyMDAwPiBmZWF0dXJlX2ltYWdlX2FsdAogICBURVhUIGZlYXR1cmVfaW1hZ2VfY2FwdGlvbgogICBMT05HVEVYVCBsZXhpY2FsCiAgIFZBUkNIQVI8MjQ-IHBvc3RfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gcG9zdF9zdGF0dXMKICAgVkFSQ0hBUjw1MD4gcmVhc29uCiAgIFZBUkNIQVI8MjAwMD4gdGl0bGUKfQpjbGFzcyB1c2Vyc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBURVhUIGFjY2Vzc2liaWxpdHkKICAgVEVYVCBiaW8KICAgVkFSQ0hBUjwxOTE-IGJsdWVza3kKICAgVElOWUlOVCBjb21tZW50X25vdGlmaWNhdGlvbnMgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBjb3Zlcl9pbWFnZQogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFRJTllJTlQgZG9uYXRpb25fbm90aWZpY2F0aW9ucyBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gZW1haWwgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBmYWNlYm9vawogICBUSU5ZSU5UIGZyZWVfbWVtYmVyX3NpZ251cF9ub3RpZmljYXRpb24gTk9UIE5VTEwKICAgVElOWUlOVCBnaWZ0X3N1YnNjcmlwdGlvbl9wdXJjaGFzZV9ub3RpZmljYXRpb24gTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IGluc3RhZ3JhbQogICBEQVRFVElNRSBsYXN0X3NlZW4KICAgVkFSQ0hBUjwxOTE-IGxpbmtlZGluCiAgIFZBUkNIQVI8Nj4gbG9jYWxlCiAgIFRFWFQgbG9jYXRpb24KICAgVkFSQ0hBUjwxOTE-IG1hc3RvZG9uCiAgIFRJTllJTlQgbWVudGlvbl9ub3RpZmljYXRpb25zIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gbWV0YV9kZXNjcmlwdGlvbgogICBWQVJDSEFSPDIwMDA-IG1ldGFfdGl0bGUKICAgVElOWUlOVCBtaWxlc3RvbmVfbm90aWZpY2F0aW9ucyBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gbmFtZSBOT1QgTlVMTAogICBUSU5ZSU5UIHBhaWRfc3Vic2NyaXB0aW9uX2NhbmNlbGVkX25vdGlmaWNhdGlvbiBOT1QgTlVMTAogICBUSU5ZSU5UIHBhaWRfc3Vic2NyaXB0aW9uX3N0YXJ0ZWRfbm90aWZpY2F0aW9uIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjA-IHBhc3N3b3JkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gcHJvZmlsZV9pbWFnZQogICBUSU5ZSU5UIHJlY29tbWVuZGF0aW9uX25vdGlmaWNhdGlvbnMgTk9UIE5VTEwKICAgVkFSQ0hBUjwxOTE-IHNsdWcgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gc3RhdHVzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiB0aHJlYWRzCiAgIFZBUkNIQVI8MTkxPiB0aWt0b2sKICAgVEVYVCB0b3VyCiAgIFZBUkNIQVI8MjAwMD4gdHdpdHRlcgogICBEQVRFVElNRSB1cGRhdGVkX2F0CiAgIFZBUkNIQVI8NTA-IHZpc2liaWxpdHkgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiB3ZWJzaXRlCiAgIFZBUkNIQVI8MTkxPiB5b3V0dWJlCn0KY2xhc3MgcG9zdHNfYXV0aG9yc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBhdXRob3JfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gcG9zdF9pZCBOT1QgTlVMTAogICBJTlRFR0VSIHNvcnRfb3JkZXIgTk9UIE5VTEwKfQpjbGFzcyBwb3N0c19tZXRhewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIFRJTllJTlQgZW1haWxfb25seSBOT1QgTlVMTAogICBWQVJDSEFSPDMwMD4gZW1haWxfc3ViamVjdAogICBWQVJDSEFSPDIwMDA-IGZlYXR1cmVfaW1hZ2VfYWx0CiAgIFRFWFQgZmVhdHVyZV9pbWFnZV9jYXB0aW9uCiAgIFRFWFQgZnJvbnRtYXR0ZXIKICAgVkFSQ0hBUjwyMDAwPiBtZXRhX2Rlc2NyaXB0aW9uCiAgIFZBUkNIQVI8MjAwMD4gbWV0YV90aXRsZQogICBWQVJDSEFSPDUwMD4gb2dfZGVzY3JpcHRpb24KICAgVkFSQ0hBUjwyMDAwPiBvZ19pbWFnZQogICBWQVJDSEFSPDMwMD4gb2dfdGl0bGUKICAgVkFSQ0hBUjwyND4gcG9zdF9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDUwMD4gdHdpdHRlcl9kZXNjcmlwdGlvbgogICBWQVJDSEFSPDIwMDA-IHR3aXR0ZXJfaW1hZ2UKICAgVkFSQ0hBUjwzMDA-IHR3aXR0ZXJfdGl0bGUKfQpjbGFzcyBwb3N0c19wcm9kdWN0c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBwb3N0X2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IHByb2R1Y3RfaWQgTk9UIE5VTEwKICAgSU5URUdFUiBzb3J0X29yZGVyIE5PVCBOVUxMCn0KY2xhc3MgcG9zdHNfdGFnc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBwb3N0X2lkIE5PVCBOVUxMCiAgIElOVEVHRVIgc29ydF9vcmRlciBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiB0YWdfaWQgTk9UIE5VTEwKfQpjbGFzcyB0YWdzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IGFjY2VudF9jb2xvcgogICBWQVJDSEFSPDIwMDA-IGNhbm9uaWNhbF91cmwKICAgVEVYVCBjb2RlaW5qZWN0aW9uX2Zvb3QKICAgVEVYVCBjb2RlaW5qZWN0aW9uX2hlYWQKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBURVhUIGRlc2NyaXB0aW9uCiAgIFZBUkNIQVI8MjAwMD4gZmVhdHVyZV9pbWFnZQogICBWQVJDSEFSPDIwMDA-IG1ldGFfZGVzY3JpcHRpb24KICAgVkFSQ0hBUjwyMDAwPiBtZXRhX3RpdGxlCiAgIFZBUkNIQVI8MTkxPiBuYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTAwPiBvZ19kZXNjcmlwdGlvbgogICBWQVJDSEFSPDIwMDA-IG9nX2ltYWdlCiAgIFZBUkNIQVI8MzAwPiBvZ190aXRsZQogICBWQVJDSEFSPDE5MT4gcGFyZW50X2lkCiAgIFZBUkNIQVI8MTkxPiBzbHVnIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTAwPiB0d2l0dGVyX2Rlc2NyaXB0aW9uCiAgIFZBUkNIQVI8MjAwMD4gdHdpdHRlcl9pbWFnZQogICBWQVJDSEFSPDMwMD4gdHdpdHRlcl90aXRsZQogICBEQVRFVElNRSB1cGRhdGVkX2F0CiAgIFZBUkNIQVI8NTA-IHZpc2liaWxpdHkgTk9UIE5VTEwKfQpjbGFzcyBwcm9kdWN0c19iZW5lZml0c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBiZW5lZml0X2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IHByb2R1Y3RfaWQgTk9UIE5VTEwKICAgSU5URUdFUiBzb3J0X29yZGVyIE5PVCBOVUxMCn0KY2xhc3MgcmVjb21tZW5kYXRpb25fY2xpY2tfZXZlbnRzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gbWVtYmVyX2lkCiAgIFZBUkNIQVI8MjQ-IHJlY29tbWVuZGF0aW9uX2lkIE5PVCBOVUxMCn0KY2xhc3MgcmVjb21tZW5kYXRpb25zewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBkZXNjcmlwdGlvbgogICBWQVJDSEFSPDIwMDA-IGV4Y2VycHQKICAgVkFSQ0hBUjwyMDAwPiBmYXZpY29uCiAgIFZBUkNIQVI8MjAwMD4gZmVhdHVyZWRfaW1hZ2UKICAgVElOWUlOVCBvbmVfY2xpY2tfc3Vic2NyaWJlIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gdGl0bGUgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAogICBWQVJDSEFSPDIwMDA-IHVybCBOT1QgTlVMTAp9CmNsYXNzIHJlY29tbWVuZGF0aW9uX3N1YnNjcmliZV9ldmVudHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBtZW1iZXJfaWQKICAgVkFSQ0hBUjwyND4gcmVjb21tZW5kYXRpb25faWQgTk9UIE5VTEwKfQpjbGFzcyByb2xlc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gZGVzY3JpcHRpb24KICAgVkFSQ0hBUjw1MD4gbmFtZSBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3Mgcm9sZXNfdXNlcnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gcm9sZV9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiB1c2VyX2lkIE5PVCBOVUxMCn0KY2xhc3Mgc2Vzc2lvbnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDIwMDA-IHNlc3Npb25fZGF0YSBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBzZXNzaW9uX2lkIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKICAgVkFSQ0hBUjwyND4gdXNlcl9pZCBOT1QgTlVMTAp9CmNsYXNzIHNldHRpbmdzewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gZmxhZ3MKICAgVkFSQ0hBUjw1MD4gZ3JvdXAgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4ga2V5IE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IHR5cGUgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAogICBURVhUIHZhbHVlCn0KY2xhc3Mgc25pcHBldHN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBMT05HVEVYVCBsZXhpY2FsCiAgIExPTkdURVhUIG1vYmlsZWRvYyBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gbmFtZSBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0Cn0KY2xhc3Mgc3RyaXBlX3ByaWNlc3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBUSU5ZSU5UIGFjdGl2ZSBOT1QgTlVMTAogICBJTlRFR0VSIGFtb3VudCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MTkxPiBjdXJyZW5jeSBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gZGVzY3JpcHRpb24KICAgVkFSQ0hBUjw1MD4gaW50ZXJ2YWwKICAgVkFSQ0hBUjwyNTU-IG5pY2tuYW1lCiAgIFZBUkNIQVI8MjU1PiBzdHJpcGVfcHJpY2VfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHN0cmlwZV9wcm9kdWN0X2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTA-IHR5cGUgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAp9CmNsYXNzIHN0cmlwZV9wcm9kdWN0c3sKICpWQVJDSEFSPDI0PiBpZCBOT1QgTlVMTAogICBEQVRFVElNRSBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IHByb2R1Y3RfaWQKICAgVkFSQ0hBUjwyNTU-IHN0cmlwZV9wcm9kdWN0X2lkIE5PVCBOVUxMCiAgIERBVEVUSU1FIHVwZGF0ZWRfYXQKfQpjbGFzcyBzdXBwcmVzc2lvbnN7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDE5MT4gZW1haWwgTk9UIE5VTEwKICAgVkFSQ0hBUjwyND4gZW1haWxfaWQKICAgVkFSQ0hBUjw1MD4gcmVhc29uIE5PVCBOVUxMCn0KY2xhc3MgdG9rZW5zewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyMDAwPiBkYXRhCiAgIERBVEVUSU1FIGZpcnN0X3VzZWRfYXQKICAgSU5URUdFUiBvdGNfdXNlZF9jb3VudCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiB0b2tlbiBOT1QgTlVMTAogICBEQVRFVElNRSB1cGRhdGVkX2F0CiAgIElOVEVHRVIgdXNlZF9jb3VudCBOT1QgTlVMTAogICBWQVJDSEFSPDM2PiB1dWlkIE5PVCBOVUxMCn0KY2xhc3Mgd2ViaG9va3N7CiAqVkFSQ0hBUjwyND4gaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gYXBpX3ZlcnNpb24gTk9UIE5VTEwKICAgREFURVRJTUUgY3JlYXRlZF9hdCBOT1QgTlVMTAogICBWQVJDSEFSPDUwPiBldmVudCBOT1QgTlVMTAogICBWQVJDSEFSPDI0PiBpbnRlZ3JhdGlvbl9pZCBOT1QgTlVMTAogICBEQVRFVElNRSBsYXN0X3RyaWdnZXJlZF9hdAogICBWQVJDSEFSPDUwPiBsYXN0X3RyaWdnZXJlZF9lcnJvcgogICBWQVJDSEFSPDUwPiBsYXN0X3RyaWdnZXJlZF9zdGF0dXMKICAgVkFSQ0hBUjwxOTE-IG5hbWUKICAgVkFSQ0hBUjwxOTE-IHNlY3JldAogICBWQVJDSEFSPDIwMDA-IHRhcmdldF91cmwgTk9UIE5VTEwKICAgREFURVRJTUUgdXBkYXRlZF9hdAp9CmNsYXNzIHdlbGNvbWVfZW1haWxfYXV0b21hdGlvbl9ydW5zewogKlZBUkNIQVI8MjQ-IGlkIE5PVCBOVUxMCiAgIERBVEVUSU1FIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MD4gZXhpdF9yZWFzb24KICAgVkFSQ0hBUjwyND4gbWVtYmVyX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjQ-IG5leHRfd2VsY29tZV9lbWFpbF9hdXRvbWF0ZWRfZW1haWxfaWQKICAgREFURVRJTUUgcmVhZHlfYXQKICAgSU5URUdFUiBzdGVwX2F0dGVtcHRzIE5PVCBOVUxMCiAgIERBVEVUSU1FIHN0ZXBfc3RhcnRlZF9hdAogICBEQVRFVElNRSB1cGRhdGVkX2F0CiAgIFZBUkNIQVI8MjQ-IHdlbGNvbWVfZW1haWxfYXV0b21hdGlvbl9pZCBOT1QgTlVMTAp9CndlbGNvbWVfZW1haWxfYXV0b21hdGVkX2VtYWlscyAiMSIgLS0gIjAuLm4iIGF1dG9tYXRlZF9lbWFpbF9yZWNpcGllbnRzCndlbGNvbWVfZW1haWxfYXV0b21hdGVkX2VtYWlscyAiMC4uMSIgLS0gIjAuLm4iIHdlbGNvbWVfZW1haWxfYXV0b21hdGVkX2VtYWlscwp3ZWxjb21lX2VtYWlsX2F1dG9tYXRpb25zICIxIiAtLSAiMC4ubiIgd2VsY29tZV9lbWFpbF9hdXRvbWF0ZWRfZW1haWxzCmVtYWlsX2Rlc2lnbl9zZXR0aW5ncyAiMSIgLS0gIjAuLm4iIHdlbGNvbWVfZW1haWxfYXV0b21hdGVkX2VtYWlscwpjb2xsZWN0aW9ucyAiMSIgLS0gIjAuLm4iIGNvbGxlY3Rpb25zX3Bvc3RzCnBvc3RzICIxIiAtLSAiMC4ubiIgY29sbGVjdGlvbnNfcG9zdHMKbmV3c2xldHRlcnMgIjAuLjEiIC0tICIwLi5uIiBwb3N0cwptZW1iZXJzICIxIiAtLSAiMC4ubiIgY29tbWVudF9saWtlcwpjb21tZW50cyAiMSIgLS0gIjAuLm4iIGNvbW1lbnRfbGlrZXMKcG9zdHMgIjEiIC0tICIwLi5uIiBjb21tZW50cwpjb21tZW50cyAiMC4uMSIgLS0gIjAuLm4iIGNvbW1lbnRzCm1lbWJlcnMgIjAuLjEiIC0tICIwLi5uIiBjb21tZW50cwpjb21tZW50cyAiMC4uMSIgLS0gIjAuLm4iIGNvbW1lbnRzCm1lbWJlcnMgIjAuLjEiIC0tICIwLi5uIiBjb21tZW50X3JlcG9ydHMKY29tbWVudHMgIjEiIC0tICIwLi5uIiBjb21tZW50X3JlcG9ydHMKbWVtYmVycyAiMC4uMSIgLS0gIjAuLm4iIGRvbmF0aW9uX3BheW1lbnRfZXZlbnRzCmVtYWlscyAiMSIgLS0gIjAuLm4iIGVtYWlsX2JhdGNoZXMKbmV3c2xldHRlcnMgIjAuLjEiIC0tICIwLi5uIiBlbWFpbHMKZW1haWxzICIxIiAtLSAiMC4ubiIgZW1haWxfcmVjaXBpZW50X2ZhaWx1cmVzCmVtYWlsX3JlY2lwaWVudHMgIjEiIC0tICIwLi5uIiBlbWFpbF9yZWNpcGllbnRfZmFpbHVyZXMKZW1haWxzICIxIiAtLSAiMC4ubiIgZW1haWxfcmVjaXBpZW50cwplbWFpbF9iYXRjaGVzICIxIiAtLSAiMC4ubiIgZW1haWxfcmVjaXBpZW50cwplbWFpbHMgIjEiIC0tICIwLi5uIiBlbWFpbF9zcGFtX2NvbXBsYWludF9ldmVudHMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIGVtYWlsX3NwYW1fY29tcGxhaW50X2V2ZW50cwptZW1iZXJzICIwLi4xIiAtLSAiMC4ubiIgZ2lmdHMKbWVtYmVycyAiMC4uMSIgLS0gIjAuLm4iIGdpZnRzCnByb2R1Y3RzICIxIiAtLSAiMC4ubiIgZ2lmdHMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfY2FuY2VsX2V2ZW50cwpyZWRpcmVjdHMgIjEiIC0tICIwLi5uIiBtZW1iZXJzX2NsaWNrX2V2ZW50cwptZW1iZXJzICIxIiAtLSAiMC4ubiIgbWVtYmVyc19jbGlja19ldmVudHMKcG9zdHMgIjAuLjEiIC0tICIwLi5uIiByZWRpcmVjdHMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfY3JlYXRlZF9ldmVudHMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfZW1haWxfY2hhbmdlX2V2ZW50cwpwb3N0cyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfZmVlZGJhY2sKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfZmVlZGJhY2sKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfbGFiZWxzCmxhYmVscyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfbGFiZWxzCm1lbWJlcnMgIjEiIC0tICIwLi5uIiBtZW1iZXJzX2xvZ2luX2V2ZW50cwpuZXdzbGV0dGVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfbmV3c2xldHRlcnMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfbmV3c2xldHRlcnMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfcGFpZF9zdWJzY3JpcHRpb25fZXZlbnRzCm1lbWJlcnMgIjEiIC0tICIwLi5uIiBtZW1iZXJzX3BheW1lbnRfZXZlbnRzCnByb2R1Y3RzICIxIiAtLSAiMC4ubiIgbWVtYmVyc19wcm9kdWN0X2V2ZW50cwptZW1iZXJzICIxIiAtLSAiMC4ubiIgbWVtYmVyc19wcm9kdWN0X2V2ZW50cwpwcm9kdWN0cyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfcHJvZHVjdHMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfcHJvZHVjdHMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfc3RhdHVzX2V2ZW50cwptZW1iZXJzICIxIiAtLSAiMC4ubiIgbWVtYmVyc19zdHJpcGVfY3VzdG9tZXJzCm1lbWJlcnNfc3RyaXBlX2N1c3RvbWVycyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfc3RyaXBlX2N1c3RvbWVyc19zdWJzY3JpcHRpb25zCnN1YnNjcmlwdGlvbnMgIjAuLjEiIC0tICIwLi5uIiBtZW1iZXJzX3N0cmlwZV9jdXN0b21lcnNfc3Vic2NyaXB0aW9ucwpvZmZlcnMgIjAuLjEiIC0tICIwLi5uIiBtZW1iZXJzX3N0cmlwZV9jdXN0b21lcnNfc3Vic2NyaXB0aW9ucwpwcm9kdWN0cyAiMC4uMSIgLS0gIjAuLm4iIG9mZmVycwpvZmZlcnMgIjAuLjEiIC0tICIwLi5uIiBzdWJzY3JpcHRpb25zCm1lbWJlcnMgIjEiIC0tICIwLi5uIiBzdWJzY3JpcHRpb25zCnByb2R1Y3RzICIxIiAtLSAiMC4ubiIgc3Vic2NyaXB0aW9ucwpuZXdzbGV0dGVycyAiMC4uMSIgLS0gIjAuLm4iIG1lbWJlcnNfc3Vic2NyaWJlX2V2ZW50cwptZW1iZXJzICIxIiAtLSAiMC4ubiIgbWVtYmVyc19zdWJzY3JpYmVfZXZlbnRzCm1lbWJlcnMgIjEiIC0tICIwLi5uIiBtZW1iZXJzX3N1YnNjcmlwdGlvbl9jcmVhdGVkX2V2ZW50cwptZW1iZXJzX3N0cmlwZV9jdXN0b21lcnNfc3Vic2NyaXB0aW9ucyAiMSIgLS0gIjAuLm4iIG1lbWJlcnNfc3Vic2NyaXB0aW9uX2NyZWF0ZWRfZXZlbnRzCm1lbWJlcnNfc3RyaXBlX2N1c3RvbWVyc19zdWJzY3JpcHRpb25zICIxIiAtLSAiMC4ubiIgb2ZmZXJfcmVkZW1wdGlvbnMKb2ZmZXJzICIxIiAtLSAiMC4ubiIgb2ZmZXJfcmVkZW1wdGlvbnMKbWVtYmVycyAiMSIgLS0gIjAuLm4iIG9mZmVyX3JlZGVtcHRpb25zCnVzZXJzICIwLi4xIiAtLSAiMC4ubiIgcG9zdF9yZXZpc2lvbnMKcG9zdHMgIjEiIC0tICIwLi5uIiBwb3N0c19hdXRob3JzCnVzZXJzICIxIiAtLSAiMC4ubiIgcG9zdHNfYXV0aG9ycwpwb3N0cyAiMSIgLS0gIjAuLm4iIHBvc3RzX21ldGEKcHJvZHVjdHMgIjEiIC0tICIwLi5uIiBwb3N0c19wcm9kdWN0cwpwb3N0cyAiMSIgLS0gIjAuLm4iIHBvc3RzX3Byb2R1Y3RzCnBvc3RzICIxIiAtLSAiMC4ubiIgcG9zdHNfdGFncwp0YWdzICIxIiAtLSAiMC4ubiIgcG9zdHNfdGFncwpwcm9kdWN0cyAiMSIgLS0gIjAuLm4iIHByb2R1Y3RzX2JlbmVmaXRzCmJlbmVmaXRzICIxIiAtLSAiMC4ubiIgcHJvZHVjdHNfYmVuZWZpdHMKcmVjb21tZW5kYXRpb25zICIxIiAtLSAiMC4ubiIgcmVjb21tZW5kYXRpb25fY2xpY2tfZXZlbnRzCm1lbWJlcnMgIjAuLjEiIC0tICIwLi5uIiByZWNvbW1lbmRhdGlvbl9jbGlja19ldmVudHMKbWVtYmVycyAiMC4uMSIgLS0gIjAuLm4iIHJlY29tbWVuZGF0aW9uX3N1YnNjcmliZV9ldmVudHMKcmVjb21tZW5kYXRpb25zICIxIiAtLSAiMC4ubiIgcmVjb21tZW5kYXRpb25fc3Vic2NyaWJlX2V2ZW50cwpzdHJpcGVfcHJvZHVjdHMgIjEiIC0tICIwLi5uIiBzdHJpcGVfcHJpY2VzCnByb2R1Y3RzICIwLi4xIiAtLSAiMC4ubiIgc3RyaXBlX3Byb2R1Y3RzCmVtYWlscyAiMC4uMSIgLS0gIjAuLm4iIHN1cHByZXNzaW9ucwppbnRlZ3JhdGlvbnMgIjEiIC0tICIwLi5uIiB3ZWJob29rcwp3ZWxjb21lX2VtYWlsX2F1dG9tYXRlZF9lbWFpbHMgIjAuLjEiIC0tICIwLi5uIiB3ZWxjb21lX2VtYWlsX2F1dG9tYXRpb25fcnVucwptZW1iZXJzICIxIiAtLSAiMC4ubiIgd2VsY29tZV9lbWFpbF9hdXRvbWF0aW9uX3J1bnMKd2VsY29tZV9lbWFpbF9hdXRvbWF0aW9ucyAiMSIgLS0gIjAuLm4iIHdlbGNvbWVfZW1haWxfYXV0b21hdGlvbl9ydW5z)
