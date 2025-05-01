import os
from notion_client import Client
from dotenv import load_dotenv
import json
import argparse
import logging

class NotionPortfolioGenerator:
    def __init__(self):
        load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env'))
        notion_token = os.getenv("NOTION_TOKEN")
        database_id = os.getenv("PORTFOLIO_DATABASE_ID")
        logging.info(f"NOTION_TOKEN loaded: {bool(notion_token)}")
        logging.info(f"PORTFOLIO_DATABASE_ID loaded: {database_id}")
        self.notion = Client(auth=notion_token)
        self.database_id = database_id

    def create_portfolio_page(self, title, description, tags, cover_image=None):
        """
        Create a new portfolio item in Notion
        """
        properties = {
            "Name": {"title": [{"text": {"content": title}}]},
            "Description": {"rich_text": [{"text": {"content": description}}]},
            "Tags": {"multi_select": [{"name": tag} for tag in tags]} if tags else None,
        }

        page = self.notion.pages.create(
            parent={"database_id": self.database_id},
            properties=properties,
            children=[
                {
                    "object": "block",
                    "type": "heading_2",
                    "heading_2": {
                        "rich_text": [{"text": {"content": "Project Details"}}]
                    }
                },
                {
                    "object": "block",
                    "type": "paragraph",
                    "paragraph": {
                        "rich_text": [{"text": {"content": description}}]
                    }
                }
            ]
        )
        return page

    def add_image_to_page(self, page_id, image_url):
        """
        Add an image to an existing portfolio page
        """
        self.notion.blocks.children.append(
            block_id=page_id,
            children=[
                {
                    "object": "block",
                    "type": "image",
                    "image": {
                        "type": "external",
                        "external": {"url": image_url}
                    }
                }
            ]
        )

    def create_portfolio_structure(self):
        """
        Create the main portfolio structure in Notion
        """
        # Create main portfolio page
        main_page = self.notion.pages.create(
            parent={"database_id": self.database_id},
            properties={
                "Name": {"title": [{"text": {"content": "My Portfolio"}}]}
            },
            children=[
                {
                    "object": "block",
                    "type": "heading_2",
                    "heading_2": {
                        "rich_text": [{"text": {"content": "Welcome to My Portfolio"}}]
                    }
                },
                {
                    "object": "block",
                    "type": "paragraph",
                    "paragraph": {
                        "rich_text": [
                            {
                                "text": {
                                    "content": "This is my professional portfolio showcasing my projects and achievements."
                                }
                            }
                        ]
                    }
                }
            ]
        )
        return main_page

def run_all():
    """Run full import of all sections into Notion."""
    generator = NotionPortfolioGenerator()
    main_page = generator.create_portfolio_structure()
    logging.info(f"Main portfolio page created: {main_page['url']}")

    # Bulk import projects from LinkedIn resume
    default_tags = os.getenv("DEFAULT_TAGS", "").split(",") if os.getenv("DEFAULT_TAGS") else []
    projects = [
        {"title": "Community Health Index Analysis (Omdena)", "description": "Utilized XGBoost to analyze public health data in San Jose and develop a predictive health index for San Jose, supporting improved resource allocation and decision-making.", "tags": default_tags},
        {"title": "Customer Support System", "description": "Designed an AI-driven support system leveraging fine-tuned GPT models and LangChain for retrieval-augmented generation (RAG), resulting in a 50% reduction in customer response time.", "tags": default_tags},
        {"title": "Sarcopenia Prediction System", "description": "Built a machine learning model using Random Forest to analyze clinical data for early detection of sarcopenia, achieving a prediction accuracy of 78%, enabling proactive healthcare interventions.", "tags": default_tags},
        {"title": "Spring-Boot Yeoman-Generator", "description": "Automated YAML-to-Spring scaffolding, reducing boilerplate setup by 70% and improving developer productivity with a React.js-based interface.", "tags": default_tags}
    ]
    for proj in projects:
        page = generator.create_portfolio_page(proj['title'], proj['description'], proj['tags'])
        logging.info(f"Created project page: {page['url']}")

    # Add Contact & Summary to main page
    page_id = main_page['id']
    contact_summary_blocks = [
        {"object":"block","type":"heading_2","heading_2":{"rich_text":[{"text":{"content":"Contact"}}]}},
        {"object":"block","type":"paragraph","paragraph":{"rich_text":[{"text":{"content":"9256639886 (Mobile)\nprachi1615@gmail.com\nwww.linkedin.com/in/prachisethi-71a189112"}}]}},
        {"object":"block","type":"heading_2","heading_2":{"rich_text":[{"text":{"content":"Summary"}}]}},
        {"object":"block","type":"paragraph","paragraph":{"rich_text":[{"text":{"content":"I’m a problem solver who thrives on innovation—and keeping my inner nerd happy! With a background in AI, software engineering, and cloud technologies, I love building and experimenting with cutting-edge solutions. Beyond coding, I’m passionate about developer communities and knowledge sharing. As an IEEE Chair, Toastmasters President, and GDG Organizer, I actively engage in tech discussions, events, and networking to learn and contribute. I also enjoy writing about AI, cloud, and emerging technologies to break down complex topics for a wider audience. Excited to connect with fellow engineers, developers, and tech enthusiasts—let’s build something amazing!"}}]}}
    ]
    generator.notion.blocks.children.append(block_id=page_id, children=contact_summary_blocks)

    # Bulk import Skills
    skills = ["Computer Science","Computer Vision","Community Development"]
    for skill in skills:
        page = generator.create_portfolio_page(skill, "", ["Skill"])
        logging.info(f"Created skill page: {page['url']}")

    # Bulk import Certifications
    certifications = [
        "Introduction to Large Language Models",
        "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
        "Introduction to Generative AI",
        "React (Basic)",
        "Introduction to Responsible AI"
    ]
    for cert in certifications:
        page = generator.create_portfolio_page(cert, "", ["Certification"])
        logging.info(f"Created certification page: {page['url']}")

    # Bulk import Hackathon Wins
    hackathons = ["ETHGlobal","Women in RAG","Berkeley"]
    for h in hackathons:
        page = generator.create_portfolio_page(h, "", ["Hackathon"])
        logging.info(f"Created hackathon page: {page['url']}")

    # Bulk import Experience entries
    experiences = [
        {"title":"Teaching Assistant @ San Francisco Bay University","description":"Feb 2025 - Present | Fremont, CA","tags":["Experience"]},
        {"title":"Community Organizer @ GDG Silicon Valley","description":"Oct 2024 - Present | Silicon Valley","tags":["Experience"]},
        {"title":"Intern @ MicroSense Technology LLC","description":"Sep 2024 - Dec 2024 | CA, USA","tags":["Experience"]},
        {"title":"Generative AI Engineer @ Stealth Mode","description":"Jul 2024 - Aug 2024","tags":["Experience"]},
        {"title":"Software Engineer @ Dunzo","description":"Aug 2022 - Jun 2023 | Bengaluru, India","tags":["Experience"]},
        {"title":"Software Testing Engineer 2 @ BetterPlace","description":"Apr 2021 - Aug 2022 | Bengaluru, India","tags":["Experience"]},
        {"title":"Test Engineer @ BetterPlace","description":"Aug 2020 - Apr 2021 | Bengaluru, India","tags":["Experience"]},
        {"title":"Intern @ BetterPlace","description":"Dec 2019 - Aug 2020 | Bengaluru, India","tags":["Experience"]},
        {"title":"Volunteer @ Center of Social Action","description":"Aug 2016 - Apr 2020 | Bengaluru, India","tags":["Experience"]},
        {"title":"Internship Trainee @ LG Soft India","description":"Apr 2019 - May 2019 | India","tags":["Experience"]},
        {"title":"Core Committee Member @ Magnovite","description":"Apr 2018 - Mar 2019","tags":["Experience"]},
        {"title":"Graphic Designer @ Christ University","description":"Dec 2017 - Mar 2018","tags":["Experience"]}
    ]
    for exp in experiences:
        page = generator.create_portfolio_page(exp['title'], exp['description'], exp['tags'])
        logging.info(f"Created experience page: {page['url']}")

    # Bulk import Education entries
    education = [
        {"title":"Master of Science - Computer Science @ San Francisco Bay University","description":"Aug 2023 - May 2025","tags":["Education"]},
        {"title":"Advanced Certification in Software Engineering, IOT Cloud Blockchain @ Great Learning","description":"Apr 2021 - Feb 2022","tags":["Education"]},
        {"title":"Bachelor of Technology - Computer Science @ Christ University","description":"2016 - 2020","tags":["Education"]},
        {"title":"+2 @ Don Bosco School","description":"2001 - 2015","tags":["Education"]}
    ]
    for edu in education:
        page = generator.create_portfolio_page(edu['title'], edu['description'], edu['tags'])
        logging.info(f"Created education page: {page['url']}")

def main():
    parser = argparse.ArgumentParser(description="Notion Portfolio CLI")
    parser.add_argument('--all', action='store_true', help='Import all sections')
    # future flags: --projects, --skills, etc.
    args = parser.parse_args()
    logging.basicConfig(level=logging.INFO)
    if args.all:
        run_all()
    else:
        parser.print_help()

if __name__ == "__main__":
    main()
